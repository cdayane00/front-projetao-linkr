import React from "react";
import Post from "./postcard";

export function WithContent({ posts }) {
  return (
    <>
      {posts.map((e) => (
        <Post props={e} key={e.id} />
      ))}
    </>
  );
}

// export function WithoutContent() {
//   return <></>;
// }
