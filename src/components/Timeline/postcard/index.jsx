/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { useNavigate } from "react-router-dom";
import { ReactTagify } from "react-tagify";

import { Card, CardSide, CardDetails, Heart } from "./styles";

export default function Post({ props }) {
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
        <img
          src={props.photo || props.userImage}
          alt={props.username || props.userName}
        />
        <Heart />
        <p>{props.likeCount} likes</p>
      </CardSide>
      <CardDetails>
        <div className="user">
          <p>{props.username}</p>
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
