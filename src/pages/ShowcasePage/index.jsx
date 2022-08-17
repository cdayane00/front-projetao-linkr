import React from "react";
import { useParams } from "react-router-dom";

import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import {
  WithError,
  WithoutContent,
  WithoutFollow,
} from "../../components/Timeline";
import LoadingCard from "../../components/Timeline/loading";

import { Main, Content, Feed } from "../TimelinePage/styles";

export default function Showcase() {
  const { content } = useParams();
  const error401 = content === "401" && <WithError error={content} />;
  const error404 = content === "404" && <WithError error={content} />;
  const noPost = content === "empty" && <WithoutContent />;
  const noFollow = content === "nofollow" && <WithoutFollow />;
  const loadingFeed = content === "loading" && <LoadingCard />;
  const loadingSide = content === "loading" && <Sidebar isLoading />;
  return (
    <>
      <Header
        dummy="https://i.pinimg.com/564x/00/28/d9/0028d990d266bf999bfbdf143f4999f5.jpg"
        title={content}
      />
      <Main>
        <Content>
          <Feed>
            {error401}
            {error404}
            {noPost}
            {noFollow}
            {loadingFeed}
          </Feed>
          {loadingSide}
        </Content>
      </Main>
    </>
  );
}
