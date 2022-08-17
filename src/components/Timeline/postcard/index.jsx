/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext, useState, useRef, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ReactTagify } from "react-tagify";
import { HandlerContext } from "../../../contexts/handlerContext";

import {
  Card,
  CardSide,
  CardDetails,
  Trash,
  Pencil,
  CommentsIcon,
  CommentsCounter,
  Container,
  PostContainer,
} from "./styles";
import { editPost, getCommentsByPostId } from "../../../services/api";

import { callToast } from "../../../utils";
import LikeContainer from "../../LikeContainer";
import CommentsSection from "../../CommentsSection";

export default function Post({ props, userId }) {
  const [commentsArray, setCommentsArray] = useState(null);
  const [isExtended, setExtended] = useState(false);
  const [isOpen, setCommentsOpen] = useState(false);
  const commentsRef = useRef();

  const scrollToComments = () => {
    commentsRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  async function getComments() {
    try {
      const { data } = await getCommentsByPostId(props.postId);
      setCommentsArray(data);

      const SCROLL_TIMEOUT = 1 * 0.15;
      setTimeout(scrollToComments, SCROLL_TIMEOUT);
    } catch (error) {
      console.log(error);
      callToast("error", error?.response?.data?.error);
    }
  }

  async function handleClick() {
    setCommentsOpen(!isOpen);
    if (!isOpen) {
      await getComments();
    }
  }

  return (
    <PostContainer>
      <Card>
        <Container>
          <CardSide>
            <img src={props.photo} alt={props.username} />
            <LikeContainer
              postId={props.postId}
              postLikesData={props.postLikesData}
              likeCount={props.likeCount}
            />
            <CommentsIcon onClick={() => handleClick()} />
            <CommentsCounter>
              {commentsArray?.length || props.commentsCount} comments
            </CommentsCounter>
          </CardSide>
          <CardDetails isExtended={isExtended}>
            <PostSettings
              props={props}
              userId={userId}
              setExtended={setExtended}
              isExtended={isExtended}
            />
            <a href={props.metaUrl} target="_blank" rel="noopener noreferrer">
              <div className="meta-data">
                <div className="info-wrapper">
                  <div className="meta-title">
                    <p>{props.metaTitle}</p>
                  </div>
                  <div className="meta-text">
                    <p>{props.metaText}</p>
                  </div>
                  <div className="meta-link">
                    <p>{props.metaUrl}</p>
                  </div>
                </div>
                <img src={props.metaImage} alt={props.metaTitle} />
              </div>
            </a>
          </CardDetails>
        </Container>
      </Card>

      <CommentsSection
        postId={props.postId}
        isOpen={isOpen}
        innerRef={commentsRef}
        commentsArray={commentsArray}
        updateCommentsArray={() => getComments()}
      />
    </PostContainer>
  );
}

function PostSettings({ props, userId, setExtended, isExtended }) {
  const navigate = useNavigate();
  const { setIsOpen, setPostId, userData } = useContext(HandlerContext);
  const [initialText, setInitialText] = useState(props.postText);
  const [editText, setEditText] = useState(initialText);
  const [isEditing, setEditing] = useState(false);
  const inputRef = useRef();
  const tagifyProps = {
    tagStyle: {
      color: "#FFFFFF",
      fontWeight: "700",
      cursor: "pointer",
    },
    tagClicked: (tag) => navigate(`/hashtags/${tag.replace("#", "")}`),
  };

  const toggleEditing = () => {
    setEditing(!isEditing);
  };

  useEffect(() => {
    if (isEditing) {
      inputRef.current.focus();
    }
  }, [isEditing]);
  return (
    <>
      <div className="user-wrapper">
        <Link to={`/user/${props.userId}`}>
          <div className="user">
            <p>{props.username}</p>
          </div>
        </Link>
        {userId === props.userId && !isEditing && (
          <div className="edit">
            <Pencil
              onClick={() => {
                toggleEditing();
              }}
            />
            <Trash
              onClick={() => {
                setPostId(props.postId);
                setIsOpen(true);
              }}
            />
          </div>
        )}
        {userId === props.userId && isEditing && (
          <div className="edit">
            <Pencil
              onClick={() => {
                setEditText(initialText);
                toggleEditing();
              }}
            />
            <Trash
              onClick={() => {
                setPostId(props.id);
                setIsOpen(true);
              }}
            />
          </div>
        )}
      </div>
      {!isEditing && editText.length <= 159 && (
        <div className="description">
          <ReactTagify {...tagifyProps}>
            <p>{editText}</p>
          </ReactTagify>
        </div>
      )}
      {!isEditing && editText.length > 159 && (
        <div
          className="big-description"
          onClick={() => {
            setExtended(!isExtended);
          }}
        >
          <ReactTagify {...tagifyProps}>
            <p>{editText}</p>
          </ReactTagify>
        </div>
      )}
      {isEditing && (
        <EditArea
          editText={editText}
          setEditText={setEditText}
          inputRef={inputRef}
          toggleEditing={toggleEditing}
          initialText={initialText}
          setInitialText={setInitialText}
          id={props.postId}
          userData={userData}
        />
      )}
    </>
  );
}

function EditArea({
  editText,
  setEditText,
  inputRef,
  toggleEditing,
  initialText,
  setInitialText,
  id,
  userData,
}) {
  const [isDisabled, setDisabled] = useState(false);
  const handleKeyPress = async (e) => {
    if (e.key === "Escape") {
      setEditText(initialText);
      toggleEditing();
    }
    if (e.key === "Enter") {
      setDisabled(true);
      try {
        await editPost(id, { postText: editText }, userData.config);
        setInitialText(editText);
        setTimeout(() => {
          setDisabled(false);
          toggleEditing();
        }, 1000);
      } catch (err) {
        callToast("error", err?.response?.data?.error);
        setDisabled(false);
      }
    }
  };

  return (
    <textarea
      className="edit-description"
      ref={inputRef}
      onFocus={(e) =>
        e.currentTarget.setSelectionRange(
          e.currentTarget.value.length,
          e.currentTarget.value.length
        )
      }
      value={editText}
      onChange={(e) => setEditText(e.target.value)}
      onKeyDown={(e) => handleKeyPress(e)}
      disabled={isDisabled}
    />
  );
}
