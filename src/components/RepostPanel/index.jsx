import React from "react";
import { RepostIcon } from "../Timeline/postcard/styles";
import { Container, RepostedBy } from "./styles";

export default function RepostPanel({
  whoSharedName,
  postAuthorId,
  loggedUserId,
  userPageName,
  userIdParams,
}) {
  function setWhoShared() {
    if (whoSharedName) {
      return whoSharedName;
    }
    if (postAuthorId === loggedUserId) {
      return "You";
    }
    if (userPageName && postAuthorId !== loggedUserId && userIdParams) {
      return userPageName;
    }
    return null;
  }

  const whoShared = setWhoShared();

  return (
    <Container>
      <RepostIcon as={RepostIcon} />
      <RepostedBy>
        Re-posted by <strong>{whoShared}</strong>
      </RepostedBy>
    </Container>
  );
}
