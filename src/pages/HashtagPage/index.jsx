import React, { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Header from "../../components/Header";
import Post from "../../components/Timeline/postcard";
import Sidebar from "../../components/Sidebar";

import { Main, Content, Feed } from "../TimelinePage/styles";
import { FeedHashtag, HashtagMain, PageContent } from "./styles";
import { callToast } from "../../utils";
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
    } catch (error) {
      callToast("error", error?.response?.data?.error);
    }
  }

  useEffect(() => {
    if (!userData.token) {
      callToast("error", "Log in to have access to this page");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } else {
      getPageInfo();
    }
  }, [hashtag, refresh]);

  const skeletonLoading = isGetting && <LoadingCard />;
  const posts =
    !isGetting &&
    pageData?.posts.map((post) => (
      <Post userId={post.userId} key={post.postId} props={post} />
    ));

  return (
    <>
      <Header props={userData} title={`# ${hashtag}`} />
      <HashtagMain as={Main}>
        <PageContent as={Content}>
          <FeedHashtag as={Feed}>
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
