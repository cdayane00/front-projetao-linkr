import React from "react";
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

function CommentsForm({ innerRef }) {
  const [{ photo: userProfileImage }] = useLocalStorage("linkrUserData", "");

  return (
    <PostCommentContainer ref={innerRef}>
      <ProfileImage src={userProfileImage} alt="user" />
      <Form>
        <CommentInput type="text" placeholder="write a comment..." />
        <CommentSubmitButton type="submit">
          <SubmitCommentIcon />
        </CommentSubmitButton>
      </Form>
    </PostCommentContainer>
  );
}

export default function CommentsSection({ commentsArray, isOpen, innerRef }) {
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
        <CommentsForm innerRef={innerRef} />
      </Wrapper>
    </Container>
  );
}
