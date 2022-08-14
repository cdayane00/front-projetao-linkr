/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext, useState, useRef, useEffect } from "react";

import { useNavigate, Link } from "react-router-dom";
import { ReactTagify } from "react-tagify";
import { HandlerContext } from "../../../contexts/handlerContext";
import { Card, CardSide, CardDetails, Heart, Trash, Pencil } from "./styles";

export default function Post({ props, userId }) {
  return (
    <Card>
      <CardSide>
        <img src={props.photo} alt={props.username} />
        <Heart />
        <p>{props.likeCount} likes</p>
      </CardSide>
      <CardDetails>
        <PostSettings props={props} userId={userId} />
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
    </Card>
  );
}

function PostSettings({ props, userId }) {
  const navigate = useNavigate();
  const { setIsOpen, setPostId } = useContext(HandlerContext);
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
                setPostId(props.id);
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
      {!isEditing && (
        <div className="description">
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
}) {
  const [isDisabled, setDisabled] = useState(false);

  const handleKeyPress = (e) => {
    if (e.key === "Escape") {
      setEditText(initialText);
      toggleEditing();
    }
    if (e.key === "Enter") {
      setDisabled(true);
      setInitialText(editText);
      setTimeout(() => {
        setDisabled(false);
        toggleEditing();
      }, 1000);
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
