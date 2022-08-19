/* eslint-disable react/jsx-no-bind */
import React, { useContext, useState } from "react";
import SearchBar from "../SearchBar";
import { ContentTitle, MainTitle } from "./styles";
import { followThisUser, unfollowThisUser } from "../../services/api";
import { useLocalStorage } from "../../utils/hooks";
import { callToast } from "../../utils";
import { HandlerContext } from "../../contexts/handlerContext";

export default function PageTitle({
  title,
  userPhoto,
  loading,
  id,
  followers,
}) {
  const [userData] = useLocalStorage("linkrUserData", "");
  const [isDisabled, setDisabled] = useState(false);
  const { interaction, setInteraction } = useContext(HandlerContext);
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
          {!loading && id !== userData?.userId?.toString() && id && (
            <ButtonToggle
              interaction={interaction}
              handleSubmit={handleSubmit}
              isDisabled={isDisabled}
            />
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

function ButtonToggle({ interaction, handleSubmit, isDisabled }) {
  console.log(interaction);
  if (interaction) {
    return (
      <button
        type="submit"
        className="unfollow"
        disabled={isDisabled}
        onClick={() => handleSubmit("unfollow")}
      >
        Unfollow
      </button>
    );
  }
  return (
    <button
      type="submit"
      className="follow"
      disabled={isDisabled}
      onClick={() => handleSubmit("follow")}
    >
      Follow
    </button>
  );
}
