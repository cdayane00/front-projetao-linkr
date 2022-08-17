import React, { useState } from "react";
// import Post from "./postcard";
import { WarningContent } from "../../pages/TimelinePage/styles";
import err401 from "../../assets/14.png";
// import ghost from "../../assets/ghost.png";
import err404 from "../../assets/24.png";
import looking from "../../assets/2.png";
import zeroFollows from "../../assets/28.png";

// export function WithContent({ posts, userId, setIsOpen }) {
//   return (
//     <>
//       {posts.map((e) => (
//         <Post props={e} key={e.postId} userId={userId} setIsOpen={setIsOpen} />
//       ))}
//     </>
//   );
// }

export function WithError({ error }) {
  const [err] = useState(error);
  return (
    <WarningContent>
      {(err === 401 || err === "401") && (
        <>
          <img
            src={err401}
            alt="A giant octopus holding the oxygen tube from a diver"
          />
          <h3>Your token is outdated, please logout and log back in. </h3>
        </>
      )}
      {(err === 404 || err === "404") && (
        <>
          <img
            src={err404}
            alt="Three astronauts gathering the remaining parts of their spaceship"
          />{" "}
          <h3>
            An error occured while trying to fetch the posts, please refresh the
            page.
          </h3>
        </>
      )}
    </WarningContent>
  );
}

export function WithoutContent() {
  return (
    <WarningContent>
      <img
        className="ghost"
        src={looking}
        alt="A woman on top of a bird, searching for something"
      />
      <h3>No posts found from your friends.</h3>
    </WarningContent>
  );
}

export function WithoutFollow() {
  const text = `You don't follow anyone yet. Search for new friends!`;
  return (
    <WarningContent>
      <img
        className="ghost"
        src={zeroFollows}
        alt="A man looking to his phone while raining in his head"
      />
      <h3>{text}</h3>
    </WarningContent>
  );
}
