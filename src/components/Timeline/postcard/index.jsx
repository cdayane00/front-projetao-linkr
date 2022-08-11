import React from "react";

import { Card, CardSide, CardDetails, Heart } from "./styles";

export default function Post({ props }) {
  return (
    <Card>
      <CardSide>
        <img src={props.photo} alt={props.username} />
        <Heart />
        <p>{props.likeCount} likes</p>
      </CardSide>
      <CardDetails>
        <div className="user">
          <p>{props.username}</p>
        </div>
        <div className="description">
          <p>{props.postText}</p>
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
