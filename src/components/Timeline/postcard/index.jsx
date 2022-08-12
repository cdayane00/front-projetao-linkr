/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { useNavigate } from "react-router-dom";
import { ReactTagify } from "react-tagify";
import { Card, CardSide, CardDetails, Heart, Trash, Pencil } from "./styles";

export default function Post({ props, userId }) {
  const navigate = useNavigate();
  const tagifyProps = {
    tagStyle: {
      color: "#FFFFFF",
      fontWeight: "700",
      cursor: "pointer",
    },
    tagClicked: (tag) => navigate(`/hashtags/${tag.replace("#", "")}`),
  };

  return (
    <Card>
      <CardSide>
        <img src={props.photo} alt={props.username} />
        <Heart />
        <p>{props.likeCount} likes</p>
      </CardSide>
      <CardDetails>
        <div className="user-wrapper">
          <div className="user">
            <p>{props.username}</p>
          </div>
          {userId === props.userId && (
            <div className="edit">
              <Pencil />
              <Trash />
            </div>
          )}
        </div>
        <div className="description">
          <ReactTagify {...tagifyProps}>
            <p>{props.postText}</p>
          </ReactTagify>
        </div>
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
