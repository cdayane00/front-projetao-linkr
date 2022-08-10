import React from "react";
import { Link } from "react-router-dom";
import { Wrapper, Title, Content } from "./styles";

export default function Sidebar({ hashtags }) {
  return (
    <Wrapper>
      <Title>
        <h3>trending</h3>
      </Title>
      <Content>
        {hashtags?.map(({ hashtagName, hashtagId }) => (
          <Link key={hashtagId} to={`/hashtags/${hashtagName}`}>
            # {hashtagName}
          </Link>
        ))}
      </Content>
    </Wrapper>
  );
}
