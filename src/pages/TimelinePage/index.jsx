/* eslint-disable no-unused-vars */
import React, { useEffect, useContext, useState } from "react";
import Header from "../../components/Header";
import { Main, Content, Feed } from "./styles";
import {
  WithContent,
  WithoutContent,
  WithError,
} from "../../components/Timeline";
import Sidebar from "../../components/Sidebar";
import { useLocalStorage } from "../../utils/hooks";
import LoadingCard from "../../components/Timeline/loading";
import PostInput from "../../components/Timeline/make-a-post";
import { HandlerContext } from "../../contexts/handlerContext";
import { getPosts, listHashtags } from "../../services/api";
import { callToast } from "../../utils";

export default function Timeline() {
  const [userData] = useLocalStorage("linkrUserData", "");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [pageData, setPageData] = useState(null);
  const { refresh } = useContext(HandlerContext);

  async function getPageData() {
    setLoading(true);
    const config = {
      headers: {
        Authorization: `Bearer ${userData.token}`,
      },
    };
    const promisePosts = getPosts(config);
    const promiseTrendingTags = listHashtags(config);
    try {
      const [postResponse, hashtagsResponse] = await Promise.all([
        promisePosts,
        promiseTrendingTags,
      ]);
      setPageData({
        posts: postResponse.data,
        hashtags: hashtagsResponse.data,
      });
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    } catch (err) {
      setError(err);
      callToast("error", err?.response?.data?.error);
    }
  }
  useEffect(() => {
    getPageData();
  }, [refresh]);

  return (
    <>
      <Header props={userData} title="timeline" />
      <Main>
        <Content>
          <Feed>
            {loading && (
              <>
                <PostInput />
                <LoadingCard />
              </>
            )}
            {!loading && error && <WithError />}
            {!loading && !error && pageData?.posts?.length && (
              <>
                <PostInput />
                <WithContent userId={userData.userId} posts={pageData?.posts} />
              </>
            )}
            {!loading && !error && pageData?.posts?.length === 0 && (
              <>
                <PostInput />
                <WithoutContent />
              </>
            )}
          </Feed>
          <Sidebar isLoading={loading} hashtags={pageData?.hashtags} />
        </Content>
      </Main>
    </>
  );
}
