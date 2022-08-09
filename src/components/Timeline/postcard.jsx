import React from "react";
import { Card, CardSide, CardDetails, Heart } from "./styles";

export default function Post({ props }) {
  return (
    <Card>
      <CardSide>
        <img src={props.image} alt={props.name} />
        <Heart />
      </CardSide>
      <CardDetails>
        <div className="user">
          <p>{props.name}</p>
        </div>
        <div className="description">
          <p>{props.description}</p>
        </div>
        <div className="meta-data" />
      </CardDetails>
    </Card>
  );
}
