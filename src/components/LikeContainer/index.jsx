import React, { useState } from "react";
import { dislikePost, likePost } from "../../services/api";
import { callToast } from "../../utils";
import { useLocalStorage } from "../../utils/hooks";
import { Heart, HeartFilled, LikeCounter } from "./styles";

export default function LikeContainer({ postId, postLikesData, likeCount }) {
  const [{ userId, token }] = useLocalStorage("linkrUserData", "");
  const arrayLikedByUsersId = postLikesData?.map((like) => like.userId);

  const [isLiked, setIsLiked] = useState(arrayLikedByUsersId.includes(userId));
  const [likeValue, setLikeValue] = useState(parseInt(likeCount, 10));

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
    </>
  );
}
