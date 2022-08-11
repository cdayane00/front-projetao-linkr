import React from "react";
import Post from "./postcard";
import PostInput from "./make-a-post";

export function WithContent({ userData, posts }) {
  return (
    <>
      <PostInput props={userData} />
      {posts.map((e) => (
        <Post props={e} />
      ))}
    </>
  );
}

// export function WithoutContent() {
//   return <></>;
// }
