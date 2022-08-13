import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Header from "../../components/Header";
import Post from "../../components/Timeline/postcard";
import Sidebar from "../../components/Sidebar";

import { Main, Content, Feed } from "../TimelinePage/styles";
import { FeedHashtag, HashtagMain, PageContent } from "./styles";
import { callToast } from "../../utils";
import { useLocalStorage } from "../../utils/hooks";
import { getPostsByHashtag, listHashtags } from "../../services/api";

export default function HashtagPage() {
  const { hashtag } = useParams();
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
    } catch (error) {
      callToast("error", error?.response?.data?.error);
    }

    setIsGetting(false);
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
  }, [hashtag]);

  console.log("renderizei");

  return (
    <>
      <Header props={userData} title={`# ${hashtag}`} />
      <HashtagMain as={Main}>
        <PageContent as={Content}>
          <FeedHashtag as={Feed}>
            {!isGetting &&
              pageData?.posts.hashtagPosts.map((post) => (
                <Post userId={post.userId} key={post.postId} props={post} />
              ))}
          </FeedHashtag>
          <Sidebar hashtags={pageData?.trendingHashtags} />
        </PageContent>
      </HashtagMain>
    </>
  );
}
