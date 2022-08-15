/* eslint-disable no-unused-vars */
import React, { useState } from "react";
// import ReactTooltip from "react-tooltip";
import { dislikePost, likePost } from "../../services/api";
import { callToast } from "../../utils";
import { useLocalStorage } from "../../utils/hooks";
import { Heart, HeartFilled, LikeCounter } from "./styles";

// function defineText(isLiked, likeCount, data, userId) {
//   const newLikes = data.filter((e) => e.userId !== userId);

//   if (data.length === 0) {
//     return "Nobody liked this post yet";
//   }
//   if (data.length === 1) {
//     if (isLiked) return "You liked this post";

//     return `${data[0].likedBy} liked this post`;
//   }
//   if (data.length === 2) {
//     if (isLiked) return `You and ${newLikes[0].likedBy}`;

//     return `${newLikes[0].likedBy} and ${newLikes[1].likedBy}`;
//   }

//   if (isLiked) {
//     return `You, ${newLikes[0].likedBy} and ${likeCount - 2} others users`;
//   }
//   return `${newLikes[0].likedBy}, ${newLikes[1].likedBy} and ${
//     likeCount - 2
//   } others users`;
// }

export default function LikeContainer({ postId, postLikesData, likeCount }) {
  const [{ userId, token }] = useLocalStorage("linkrUserData", "");
  const arrayLikedByUsersId = postLikesData?.map((like) => like.userId);
  const [isLiked, setIsLiked] = useState(arrayLikedByUsersId.includes(userId));
  const [likeValue, setLikeValue] = useState(parseInt(likeCount, 10));
  // const [tooltipText, setText] = useState(() => {
  //   defineText(isLiked, likeCount, postLikesData, userId);
  // });

  async function toggleLike() {
    setIsLiked(!isLiked);

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    if (isLiked) {
      setLikeValue((value) => value - 1);

      dislikePost(postId, config).catch((err) => {
        callToast("error", err?.response?.data?.error);
      });
    } else {
      setLikeValue((value) => value + 1);
      console.log(postLikesData);
      likePost(postId, config).catch((err) => {
        callToast("error", err?.response?.data?.error);
      });
    }
  }

  // 'arrayLikedBy' is going to be used by the tooltip
  //   const arrayLikedBy = postLikesData?.map((like) => like.likedBy);

  function renderHeart() {
    if (!isLiked) {
      return <Heart onClick={() => toggleLike()} />;
    }

    if (isLiked) {
      return <HeartFilled onClick={() => toggleLike()} />;
    }

    return null;
  }

  const heart = renderHeart();

  return (
    <>
      {heart}
      <LikeCounter>{likeValue} likes</LikeCounter>
      {/* <LikeCounter>
        <p data-tip={tooltipText}>{likeValue} likes</p>
      </LikeCounter>
      <ReactTooltip place="bottom" type="light" effect="solid" />
    */}
    </>
  );
}
