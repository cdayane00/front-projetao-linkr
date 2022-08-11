import React from "react";
import Post from "./postcard";
import PostInput from "./make-a-post";

export function WithContent({ userData, posts, getData }) {
  return (
    <>
      <PostInput userData={userData} getData={getData} />
      {posts.map((e) => (
        <Post props={e} key={e.id} />
      ))}
    </>
  );
}

// export function WithoutContent() {
//   return <></>;
// }
