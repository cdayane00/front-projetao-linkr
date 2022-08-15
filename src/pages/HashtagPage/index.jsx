import React, { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Header from "../../components/Header";
import Post from "../../components/Timeline/postcard";
import Sidebar from "../../components/Sidebar";
import { WithError } from "../../components/Timeline";

import { Main, Content, Feed } from "../TimelinePage/styles";
import { FeedHashtag, HashtagMain, PageContent } from "./styles";
import { callToast, logout } from "../../utils";
import { useLocalStorage } from "../../utils/hooks";
import { getPostsByHashtag, listHashtags } from "../../services/api";
import LoadingCard from "../../components/Timeline/loading";
import { HandlerContext } from "../../contexts/handlerContext";

export default function HashtagPage() {
  const { hashtag } = useParams();
  const { refresh } = useContext(HandlerContext);
  const [userData] = useLocalStorage("linkrUserData", "");
  const navigate = useNavigate();
  const [pageData, setPageData] = useState(null);
  const [isGetting, setIsGetting] = useState(false);
  const [error, setError] = useState(null);
  async function getPageInfo() {
    setIsGetting(true);

    const config = {
      headers: {
        Authorization: `Bearer ${userData.token}`,
      },
    };

    const promisePosts = getPostsByHashtag(hashtag, config);
    const promiseTrendingTags = listHashtags(config);

    try {
      const [postsResponse, trendingHashtagsResponse] = await Promise.all([
        promisePosts,
        promiseTrendingTags,
      ]);

      setPageData({
        posts: postsResponse.data,
        trendingHashtags: trendingHashtagsResponse.data,
      });
      setTimeout(() => setIsGetting(false), 1500);
    } catch (err) {
      setIsGetting(false);
      setError(err?.response?.status);
      callToast("error", err?.response?.data?.error);
    }
  }

  useEffect(() => {
    if (!userData.token) {
      setError(401);
      callToast("error", "Log in to have access to this page");
      setTimeout(() => {
        logout();
        navigate("/");
      }, 3000);
    } else {
      getPageInfo();
    }
  }, [hashtag, refresh]);
  const skeletonLoading = isGetting && <LoadingCard />;
  const posts =
    !isGetting &&
    pageData?.posts.map((post) => (
      <Post userId={userData.userId} key={post.postId} props={post} />
    ));

  return (
    <>
      <Header props={userData} title={`# ${hashtag}`} />
      <HashtagMain as={Main}>
        <PageContent as={Content}>
          <FeedHashtag as={Feed}>
            {error && <WithError error={error} />}
            {skeletonLoading}
            {posts}
          </FeedHashtag>
          <Sidebar
            isLoading={isGetting}
            hashtags={pageData?.trendingHashtags}
          />
        </PageContent>
      </HashtagMain>
    </>
  );
}
