import React from "react";
import { Link } from "react-router-dom";
import { Wrapper, SidebarSkeleton, Title, Content } from "./styles";

export default function Sidebar({ hashtags, isLoading }) {
  return (
    <Wrapper>
      {isLoading && (
        <SidebarSkeleton baseColor="#120E0E" highlightColor="#444" />
      )}
      {hashtags && !isLoading && (
        <>
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
        </>
      )}
    </Wrapper>
  );
}
