import React, { useState } from "react";
import Post from "./postcard";
import { WarningContent } from "../../pages/TimelinePage/styles";
import err401 from "../../assets/14.png";
import ghost from "../../assets/ghost.png";
import err404 from "../../assets/24.png";

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

export function WithError({ error }) {
  const [err] = useState(error);
  return (
    <WarningContent>
      {(err === 401 || err === "401") && (
        <>
          <img src={err401} alt="A crying ghost" />{" "}
          <h3>Your token is outdated, please logout and log back in. </h3>
        </>
      )}
      {(err === 404 || err === "404") && (
        <>
          <img src={err404} alt="A crying ghost" />{" "}
          <h3>
            An error occured while trying to fetch the posts, please refresh the
            page.
          </h3>
        </>
      )}
    </WarningContent>
  );
}
