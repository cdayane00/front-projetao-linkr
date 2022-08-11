import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Header from "../../components/Header";
import Post from "../../components/Timeline/postcard";
import Sidebar from "../../components/Sidebar";

import { Main, Content, Feed } from "../TimelinePage/styles";
import { FeedHashtag, HashtagMain, PageContent } from "./styles";
import { displayErrorNotify } from "../../utils";
import { getPostsByHashtag, listHashtags } from "../../services/api";
import { useLocalStorage } from "../../utils/hooks";

export default function Timeline() {
  const { hashtag } = useParams();
  const [userData] = useLocalStorage("linkrUserData", "");
  const [hashtagDataAPI, setHashtagDataAPI] = useState(null);
  const [trendingHashtags, setTrendingHashtags] = useState([]);

  async function getHashtagPosts(hashtagName) {
    try {
      const hashtagsPromise = await listHashtags();
      setTrendingHashtags(hashtagsPromise.data);
      const postsPromise = await getPostsByHashtag(hashtagName);
      setHashtagDataAPI(postsPromise.data);
    } catch (error) {
      console.log(error);
      displayErrorNotify(error?.response.status);
    }
  }

  useEffect(() => {
    getHashtagPosts(hashtag);
  }, [hashtag]);

  return (
    <>
      <Header props={userData} title={`# ${hashtag}`} />
      <HashtagMain as={Main}>
        <PageContent as={Content}>
          <FeedHashtag as={Feed}>
            {hashtagDataAPI?.hashtagPosts.map((post) => (
              <Post userId={post.userId} key={post.postId} props={post} />
            ))}
          </FeedHashtag>
          <Sidebar hashtags={trendingHashtags} />
        </PageContent>
      </HashtagMain>
    </>
  );
}
