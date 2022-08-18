import styled, { css } from "styled-components";
import { IoRepeatSharp } from "react-icons/io5";
import { BiTrashAlt } from "react-icons/bi";
import { TiPencil } from "react-icons/ti";
import { AiOutlineComment } from "react-icons/ai";

const PostContainer = styled.div`
  margin-bottom: 26px;
`;

const Card = styled.div`
  width: 611px;
  height: auto;
  box-sizing: border-box;
  padding: 18px;
  display: flex;
  justify-content: space-between;
  border-radius: 16px;
  background-color: var(--bg-timeline-posts);

  position: relative;

  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 650px) {
    width: 100%;
    border-radius: 0;
  }
`;

const Container = styled.div`
  display: flex;
  width: 100%;

  justify-content: space-between;
`;

const LoadCard = styled.div`
  width: 611px;
  height: auto;
  border-radius: 16px;
  margin-bottom: 16px;
  z-index: 0;
  @media (max-width: 650px) {
    width: 100%;
    border-radius: 0;
  }
`;
const CardSide = styled.div`
  width: 50px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;

  img {
    width: 50px;
    height: 50px;
    border-radius: 26.5px;
    object-fit: contain;
    margin-bottom: 14px;

    @media (max-width: 650px) {
      height: 40px;
      width: 40px;
      margin-bottom: 10px;
    }
  }

  p {
    margin-top: 4px;
    font-size: 11px;
    color: var(--text-primary);

    @media (max-width: 650px) {
      text-align: center;
      line-height: 1.2em;
    }
  }

  @media (max-width: 650px) {
    margin-right: 20px;
  }
`;

export const ProfilePicContainer = styled.div``;

export const ActionsWrapper = styled.div`
  width: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;

  overflow: hidden;

  margin-bottom: 10px;

  @media (max-width: 650px) {
    margin: unset;
  }
`;

const iconCSS = css`
  font-size: 20px;

  margin-top: 10px;
  margin-bottom: 4px;

  color: var(--text-primary);
  cursor: pointer;

  @media (max-width: 650px) {
    font-size: 17px;
  }
`;

const counterCSS = css`
  font-size: 11px;
  font-family: "Lato", sans-serif;
  text-align: center;

  color: var(--text-primary);

  @media (max-width: 650px) {
    font-size: 9px;
    text-align: center;
    line-height: 1.2em;
  }
`;

const CommentsIcon = styled(AiOutlineComment)`
  ${iconCSS}
`;

const CommentsCounter = styled.span`
  ${counterCSS}
`;

const RepostIcon = styled(IoRepeatSharp)`
  ${iconCSS}
`;

const RepostCounter = styled.span`
  ${counterCSS}
`;

const CardDetails = styled.div`
  width: 502px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 7px;

  @media (max-width: 650px) {
    width: 100%;
    min-width: 100px;
  }

  a {
    text-decoration: none;

    @media (max-width: 650px) {
      max-height: fit-content;
    }
  }

  .user-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .user-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .user {
    width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: var(--text-primary);
    font-size: 19px;
    :hover {
      cursor: pointer;
      color: #c6c6c6;
    }
    @media (max-width: 650px) {
      font-size: 17px;
    }
  }

  .edit {
    display: flex;
    gap: 10px;
  }

  .description {
    width: 100%;
    height: auto;
    color: var(--text-post);
    font-size: 17px;
    display: -webkit-box;

    margin-bottom: 5px;

    @media (max-width: 650px) {
      font-size: 15px;
      line-height: 1.2em;
    }
  }

  .big-description {
    width: 100%;
    height: ${(props) => (props.isExtended ? "100px" : "51px")};
    color: var(--text-post);
    font-size: 17px;
    display: -webkit-box;
    -webkit-line-clamp: ${(props) => (props.isExtended ? "none" : "3")};
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;

    :hover {
      cursor: pointer;
      color: #c6c6c6;
    }
    transition: 0.2s;
    @media (max-width: 650px) {
      font-size: 15px;
      line-height: 1.2em;
    }
  }

  .edit-description {
    width: 100%;
    min-height: 70px;
    color: var(--text-edit);
    font-family: "Lato";
    font-size: 17px;
    display: -webkit-box;
    margin-bottom: 15px;
    border-radius: 5px;
    outline: none;
    resize: none;

    &:disabled {
      background-color: #c6c6c6;
      opacity: 0.8;
    }
    @media (max-width: 650px) {
      font-size: 15px;
      line-height: 1.2em;

      margin-bottom: 10px;
    }
  }

  .meta-data {
    width: 100%;
    height: 155px;
    border: 1px solid var(--border);
    border-radius: 12px;
    display: flex;
    align-items: center;

    :hover {
      text-decoration: underline;
      text-decoration-color: var(--link-secondary);
      offset: 3px;
    }

    @media (max-width: 650px) {
      width: unset;
      height: 115px;
      justify-content: space-between;
    }
  }

  .info-wrapper {
    width: 348px;
    height: 155px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 20px 20px;

    overflow: hidden;

    @media (max-width: 650px) {
      min-width: 100px;
      width: 100%;
      height: 100%;

      padding: 15px 20px;
    }
  }

  .meta-title {
    font-size: 16px;
    line-height: 19.2px;
    color: var(--link-primary);
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;

    @media (max-width: 650px) {
      font-size: 12px;
    }
  }

  .meta-text {
    font-size: 11px;
    line-height: 13.2px;
    color: var(--link-secondary);
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;

    @media (max-width: 650px) {
      font-size: 9px;
    }
  }

  .meta-link {
    font-size: 11px;
    line-height: 13.2px;
    color: var(--link-primary);
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;

    @media (max-width: 650px) {
      font-size: 9px;
    }
  }

  img {
    width: 155px;
    height: 155px;
    background-color: var(--border);
    border-radius: 0 12px 12px 0;
    object-fit: scale-down;

    @media (max-width: 650px) {
      width: 95px;
      height: 115px;
    }
  }
`;

const Trash = styled(BiTrashAlt)`
  font-size: 20px;
  color: var(--text-primary);
  :hover {
    cursor: pointer;
    color: #c6c6c6;
  }
`;

const Pencil = styled(TiPencil)`
  font-size: 20px;
  color: var(--text-primary);
  :hover {
    cursor: pointer;
    color: #c6c6c6;
  }
`;
export {
  PostContainer,
  Card,
  Container,
  LoadCard,
  CardSide,
  CommentsIcon,
  CommentsCounter,
  RepostIcon,
  RepostCounter,
  CardDetails,
  Trash,
  Pencil,
};
