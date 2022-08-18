import React, { useState } from "react";
import SearchBar from "../SearchBar";
import { ContentTitle, MainTitle } from "./styles";
import { followThisUser, unfollowThisUser } from "../../services/api";
import { useLocalStorage } from "../../utils/hooks";
import { callToast } from "../../utils";

function defineInteraction(prop) {
  if (prop) return true;
  return false;
}

export default function PageTitle({
  title,
  userPhoto,
  loading,
  prop,
  id,
  followers,
}) {
  const [userData] = useLocalStorage("linkrUserData", "");
  const [isDisabled, setDisabled] = useState(false);
  const [interaction, setInteraction] = useState(defineInteraction(prop));
  async function handleSubmit(method) {
    setInteraction((prev) => !prev);
    setDisabled(true);
    if (method === "unfollow") {
      try {
        await unfollowThisUser(id, userData.config);
        setDisabled(false);
      } catch (error) {
        setDisabled(false);
        callToast(
          "error",
          error?.response?.data?.error || error?.response?.data
        );
      }
    } else {
      try {
        await followThisUser(id, userData.config);
        setDisabled(false);
      } catch (error) {
        setDisabled(false);
        callToast(
          "error",
          error?.response?.data?.error || error?.response?.data
        );
      }
    }
  }
  return (
    <MainTitle>
      <ContentTitle>
        <SearchBar isMobile />
        <div className="wrapper">
          {loading && <h3>Loading...</h3>}
          {!loading && (
            <div className="user">
              {userPhoto && <img src={userPhoto} alt="photoUser" />}
              <h3>{title}</h3>
            </div>
          )}
          {!loading &&
            !interaction &&
            id !== userData?.userId?.toString() &&
            id && (
              <button
                type="submit"
                className="follow"
                disabled={isDisabled}
                onClick={() => handleSubmit("follow")}
              >
                Follow
              </button>
            )}
          {!loading &&
            interaction &&
            id !== userData?.userId?.toString() &&
            id && (
              <button
                type="submit"
                className="unfollow"
                disabled={isDisabled}
                onClick={() => handleSubmit("unfollow")}
              >
                Unfollow
              </button>
            )}
        </div>
        <div className="followers">
          {!loading && followers === "1" && id && <p>{followers} follower</p>}
          {!loading && followers !== "1" && id && <p>{followers} followers</p>}
        </div>
      </ContentTitle>
    </MainTitle>
  );
}
