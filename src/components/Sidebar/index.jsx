import React from "react";
import { Wrapper, Title, Content } from "./styles";

export default function Sidebar({ props }) {
  return (
    <Wrapper>
      <Title>
        <h3>trending</h3>
      </Title>
      <Content>
        {props.map((e, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <h3 key={index + 1}># {e.hashtag}</h3>
        ))}
      </Content>
    </Wrapper>
  );
}
