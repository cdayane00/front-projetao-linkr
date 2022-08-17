import styled from "styled-components";

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
  height: 100%;

  overflow: scroll;

  -ms-overflow-style: none; /* for Internet Explorer, Edge */
  scrollbar-width: none; /* for Firefox */

  ::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
  }

  padding: 20px 20px 25px 20px;
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
