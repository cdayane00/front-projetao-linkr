import React, { useState } from "react";
import { submitNewComment } from "../../services/api";
import { callToast } from "../../utils";
import { useLocalStorage } from "../../utils/hooks";
import {
  CommentContainer,
  Container,
  Wrapper,
  ProfileImage,
  TextContent,
  CommentAuthor,
  CommentText,
  PostCommentContainer,
  Form,
  CommentInput,
  CommentSubmitButton,
  SubmitCommentIcon,
} from "./styles";

function Comment({
  userPhoto,
  username,
  isFollowing,
  isFromAuthor,
  commentText,
}) {
  let authorDetails = null;
  if (isFollowing) {
    authorDetails = "• following";
  }
  if (isFromAuthor) {
    authorDetails = "• post's author";
  }

  return (
    <CommentContainer>
      <ProfileImage src={userPhoto} alt={username} />
      <TextContent>
        <CommentAuthor>
          {username}
          {authorDetails && (
            <span className="author-details">{authorDetails}</span>
          )}
        </CommentAuthor>
        <CommentText>{commentText}</CommentText>
      </TextContent>
    </CommentContainer>
  );
}

function CommentsForm({ innerRef, postId, updateCommentsArray }) {
  const [{ photo: userProfileImage }] = useLocalStorage("linkrUserData", "");
  const [inputValue, setInputValue] = useState("");
  const [isSubmitting, setSubmitting] = useState(false);

  async function submitComment(e) {
    setSubmitting(true);
    e.preventDefault();

    try {
      await submitNewComment(postId, inputValue);
      await updateCommentsArray();

      setInputValue("");
    } catch (error) {
      console.log(error);
      callToast("error", error?.response?.data?.error);
    }

    setSubmitting(false);
  }

  return (
    <PostCommentContainer ref={innerRef}>
      <ProfileImage src={userProfileImage} alt="user" />
      <Form onSubmit={(e) => submitComment(e)}>
        <CommentInput
          type="text"
          name="comment"
          value={inputValue}
          maxLength={255}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="write a comment..."
          disabled={isSubmitting}
          autoComplete="off"
        />
        <CommentSubmitButton type="submit" disabled={isSubmitting}>
          <SubmitCommentIcon />
        </CommentSubmitButton>
      </Form>
    </PostCommentContainer>
  );
}

export default function CommentsSection({
  postId,
  commentsArray,
  isOpen,
  innerRef,
  updateCommentsArray,
}) {
  const comments = commentsArray?.map(
    ({
      id,
      whoCommented,
      comment,
      username,
      photo,
      isFollowing,
      isFromAuthor,
    }) => (
      <Comment
        key={id}
        username={username}
        whoCommentedId={whoCommented}
        userPhoto={photo}
        isFollowing={!!isFollowing}
        isFromAuthor={!!isFromAuthor}
        commentText={comment}
      />
    )
  );

  return (
    <Container isOpen={isOpen}>
      <Wrapper>
        {comments}
        <CommentsForm
          postId={postId}
          innerRef={innerRef}
          updateCommentsArray={updateCommentsArray}
        />
      </Wrapper>
    </Container>
  );
}
