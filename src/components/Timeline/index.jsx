import React from "react";
import Post from "./postcard";
import { WarningContent } from "../../pages/TimelinePage/styles";
import error from "../../assets/error.png";
import ghost from "../../assets/ghost.png";

export function WithContent({ posts, userId, setIsOpen }) {
  return (
    <>
      {posts.map((e) => (
        <Post props={e} key={e.postId} userId={userId} setIsOpen={setIsOpen} />
      ))}
    </>
  );
}

export function WithoutContent() {
  return (
    <WarningContent>
      <img
        className="ghost"
        src={ghost}
        alt="A cute ghost with his flashlight"
      />
      <h3>There are no posts yet.</h3>
    </WarningContent>
  );
}

export function WithError() {
  return (
    <WarningContent>
      <img src={error} alt="A crying ghost" />
      <h3>
        An error occured while trying to fetch the posts, please refresh the
        page.
      </h3>
    </WarningContent>
  );
}
