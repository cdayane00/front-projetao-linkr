import styled from "styled-components";
import { IoPaperPlaneOutline } from "react-icons/io5";

export const Container = styled.div`
  background-color: var(--bg-comments);
  max-height: ${(props) => (props.isOpen ? "300px" : "0")};
  max-width: 610px;
  overflow: scroll;

  margin-top: -10px;

  border-radius: 0 0 16px 16px;
  line-height: 20px;

  transition: max-height 700ms ease-in-out;

  -ms-overflow-style: none; /* for Internet Explorer, Edge */
  scrollbar-width: none; /* for Firefox */

  ::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
  }

  @media (max-width: 650px) {
    border-radius: 0;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  overflow: scroll;

  -ms-overflow-style: none; /* for Internet Explorer, Edge */
  scrollbar-width: none; /* for Firefox */

  ::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
  }

  padding: 20px 20px 25px 20px;

  transition: max-height 700ms ease-in-out;
`;

export const CommentContainer = styled.div`
  min-height: 70px;
  padding: 20px 0;

  display: flex;
  align-items: center;
  gap: 20px;

  border-bottom: 1px solid var(--stroke-comment);
`;

export const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 20px;
`;

export const TextContent = styled.div`
  max-width: 100%;
`;

export const CommentAuthor = styled.span`
  font-size: 14px;
  font-weight: 700;
  font-family: "Lato", sans-serif;
  color: var(--text-comment-author);

  .author-details {
    font-size: 1em;
    font-weight: 400;
    color: var(--text-comment-details);
    margin-left: 5px;
  }
`;

export const CommentText = styled.p`
  font-size: 14px;
  line-height: 1.2em;
  color: var(--text-comment);
`;

export const PostCommentContainer = styled.div`
  width: 100%;
  height: 70px;

  display: flex;
  gap: 14px;

  padding-top: 20px;
  padding-bottom: 10px;
`;

export const Form = styled.form`
  width: 100%;

  background-color: var(--bg-comments-forms);
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 11px 15px;
`;

export const CommentInput = styled.input`
  height: 40px;
  width: 85%;

  background-color: var(--bg-comments-forms);

  border: none;
  outline: none;

  color: var(--send-comment);
  font-family: "Lato", sans-serif;
  font-size: 14px;

  &:disabled {
    opacity: 0.5;
  }

  &::placeholder {
    font-style: italic;
    color: var(--text-comments-input);
  }
`;

export const CommentSubmitButton = styled.button`
  background-color: var(--bg-comments-forms);
  padding: unset;

  width: 16px;
  height: 16px;

  display: flex;
  align-items: center;
  justify-content: center;
  border: none;

  &:disabled {
    opacity: 0.5;
  }
`;

export const SubmitCommentIcon = styled(IoPaperPlaneOutline)`
  color: var(--send-comment);
  font-size: 16px;
`;
