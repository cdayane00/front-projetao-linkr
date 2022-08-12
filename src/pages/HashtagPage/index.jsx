/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import Header from "../../components/Header";
import Post from "../../components/Timeline/postcard";
import Sidebar from "../../components/Sidebar";

import { Main, Content, Feed } from "../TimelinePage/styles";
import { FeedHashtag, HashtagMain, PageContent } from "./styles";
import { callToast } from "../../utils";
import { api } from "../../services/api";
import { useAxios, useLocalStorage } from "../../utils/hooks";

export default function HashtagPage() {
  const { hashtag } = useParams();
  const [userData] = useLocalStorage("linkrUserData", "");
  const [
    trendingTags,
    trendingTagsError,
    trendingTagsIsLoading,
    axiosGetTrendingTags,
  ] = useAxios();
  const [posts, postsError, postsIsLoading, axiosGetPosts] = useAxios();

  const axiosFunctionConstructor = (axiosInstance, url) => ({
    axiosInstance,
    method: "GET",
    url,
    requestConfig: {
      headers: {
        authorization: `Bearer ${userData.token}`,
      },
    },
  });

  useEffect(() => {
    axiosGetTrendingTags(axiosFunctionConstructor(api, "/hashtags"));
    axiosGetPosts(axiosFunctionConstructor(api, `/hashtags/${hashtag}`));
  }, [hashtag]);

  if (
    !postsIsLoading &&
    !trendingTagsIsLoading &&
    (trendingTagsError.length > 0 || postsError.length > 0)
  ) {
    callToast("error", postsError || trendingTagsError);
  }

  return (
    <>
      <Header props={userData} title={`# ${hashtag}`} />
      <HashtagMain as={Main}>
        <PageContent as={Content}>
          <FeedHashtag as={Feed}>
            {!postsIsLoading &&
              posts.hashtagPosts?.map((post) => (
                <Post userId={post.userId} key={post.postId} props={post} />
              ))}
          </FeedHashtag>
          <Sidebar hashtags={trendingTags} />
        </PageContent>
      </HashtagMain>
    </>
  );
}
