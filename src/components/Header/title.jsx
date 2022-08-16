import React, { useState } from "react";
import SearchBar from "../SearchBar";
import { ContentTitle, MainTitle } from "./styles";
import { followThisUser, unfollowThisUser } from "../../services/api";
import { useLocalStorage } from "../../utils/hooks";
import { callToast } from "../../utils";

export default function PageTitle({ title, userPhoto, loading, prop, id }) {
  const [userData] = useLocalStorage("linkrUserData", "");
  const [isDisabled, setDisabled] = useState(false);
  const [interaction, setInteraction] = useState(prop);
  async function handleSubmit(method) {
    setInteraction(!interaction);
    setDisabled(true);
    const config = {
      headers: {
        Authorization: `Bearer ${userData.token}`,
      },
    };
    if (method === "unfollow") {
      try {
        await unfollowThisUser(id, config);
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
        await followThisUser(id, config);
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
          {!loading && !prop && (
            <button
              type="submit"
              className="follow"
              disabled={isDisabled}
              onClick={() => handleSubmit("follow")}
            >
              Follow
            </button>
          )}
          {!loading && prop && (
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
      </ContentTitle>
    </MainTitle>
  );
}
