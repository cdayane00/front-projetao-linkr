import React, { useState, useEffect } from "react";
import { dislikePost, likePost } from "../../services/api";
import { callToast } from "../../utils";
import { useLocalStorage } from "../../utils/hooks";
import { Heart, HeartFilled, LikeCounter, Tooltip } from "./styles";

function defineText(isLiked, likeCount, data, userId) {
  const newLikes = data.filter((e) => e.userId !== userId);
  let status;
  const response = data.filter((e) => e.userId === userId);
  if (response.length === 1) {
    status = true;
  }

  if (data.length === 1 && data[0].likedBy === null) {
    if (isLiked) return "You liked this post";
    return "Nobody liked this post yet";
  }
  if (data.length === 1) {
    if (isLiked && !status) {
      return `You and ${newLikes[0].likedBy} liked this post`;
    }
    if (isLiked) return "You liked this post";
    if (newLikes[0].likedBy === null) return "Nobody liked this post yet";
    return `${newLikes[0].likedBy} liked this post`;
  }
  if (data.length === 2) {
    if (isLiked && !status) {
      return `You, ${newLikes[0].likedBy} and 1 other user`;
    }
    if (isLiked) return `You and ${newLikes[0].likedBy} liked this post`;
    if (!isLiked && status) {
      return `${newLikes[0].likedBy} liked this post`;
    }

    return `${newLikes[0]?.likedBy} and ${newLikes[1]?.likedBy} liked this post`;
  }

  if (data.length >= 3) {
    if (isLiked && !status) {
      return `You, ${newLikes[0].likedBy} and ${likeCount - 1} others user`;
    }
    if (isLiked && status) {
      return `You, ${newLikes[0].likedBy} and ${likeCount - 2} other user`;
    }
    if (!isLiked && status) {
      return `${newLikes[0].likedBy}, ${newLikes[1].likedBy} and ${
        likeCount - 3
      } other user`;
    }
  }
  return `${newLikes[0].likedBy}, ${newLikes[1].likedBy} and ${
    likeCount - 2
  } others users`;
}

export default function LikeContainer({ postId, postLikesData, likeCount }) {
  const [{ userId, token }] = useLocalStorage("linkrUserData", "");
  const arrayLikedByUsersId = postLikesData?.map((like) => like.userId);
  const [isLiked, setIsLiked] = useState(arrayLikedByUsersId.includes(userId));
  const [likeValue, setLikeValue] = useState(parseInt(likeCount, 10));
  const [tooltipText, setTooltiptext] = useState();
  const [isVisible, setVisibility] = useState(false);

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

  function renderHeart() {
    if (!isLiked) {
      return <Heart onClick={() => toggleLike()} />;
    }

    if (isLiked) {
      return <HeartFilled onClick={() => toggleLike()} />;
    }

    return null;
  }
  useEffect(() => {
    setTooltiptext(defineText(isLiked, likeCount, postLikesData, userId));
  }, [isLiked]);
  const heart = renderHeart();
  return (
    <>
      {heart}
      <LikeCounter
        onMouseEnter={() => setVisibility(true)}
        onMouseLeave={() => setVisibility(false)}
      >
        {likeValue} likes
      </LikeCounter>

      <Tooltip prop={isVisible}>
        <div className="arrow-up" />
        <div className="content">
          <p>{tooltipText}</p>
        </div>
      </Tooltip>
    </>
  );
}
