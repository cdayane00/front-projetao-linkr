import React from "react";
import { Link } from "react-router-dom";
import { RepostIcon } from "../Timeline/postcard/styles";
import { Container, RepostedBy, RepostIconPanel } from "./styles";

export default function RepostPanel({
  whoSharedName,
  whoSharedId,
  postAuthorId,
  loggedUserId,
  userPageName,
  userIdParams,
}) {
  function setWhoShared() {
    if (userIdParams === loggedUserId) {
      return "You";
    }
    if (whoSharedName) {
      return whoSharedName;
    }
    if (userPageName && postAuthorId !== loggedUserId && userIdParams) {
      return userPageName;
    }
    return null;
  }

  const whoShared = setWhoShared();

  return (
    <Container>
      <RepostIconPanel as={RepostIcon} />
      <RepostedBy>
        Re-posted by{" "}
        <strong>
          <Link to={`/user/${whoSharedId}`}>{whoShared}</Link>
        </strong>
      </RepostedBy>
    </Container>
  );
}
