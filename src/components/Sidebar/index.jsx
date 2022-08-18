import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { HandlerContext } from "../../contexts/handlerContext";
import { Wrapper, SidebarSkeleton, Title, Content } from "./styles";

export default function Sidebar({ hashtags, isLoading }) {
  const { setRefresh } = useContext(HandlerContext);
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
              <Link
                onClick={() => setRefresh((prev) => !prev)}
                key={hashtagId}
                to={`/hashtags/${hashtagName}`}
              >
                # {hashtagName}
              </Link>
            ))}
          </Content>
        </>
      )}
    </Wrapper>
  );
}
