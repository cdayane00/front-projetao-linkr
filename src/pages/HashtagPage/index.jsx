import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Header from "../../components/Header";
import Post from "../../components/Timeline/postcard";
import Sidebar from "../../components/Sidebar";

import { Main, Content, Feed } from "../TimelinePage/styles";
import { FeedHashtag, HashtagMain, PageContent } from "./styles";
import { displayErrorNotify } from "../../utils";
import { getPostsByHashtag, listHashtags } from "../../services/api";

export default function Timeline() {
  const { hashtag } = useParams();
  const [hashtagDataAPI, setHashtagDataAPI] = useState(null);
  const [trendingHashtags, setTrendingHashtags] = useState([]);

  async function getHashtagPosts(hashtagName) {
    try {
      const postsPromise = await getPostsByHashtag(hashtagName);
      const hashtagsPromise = await listHashtags();
      setHashtagDataAPI(postsPromise.data);
      setTrendingHashtags(hashtagsPromise.data);
    } catch (error) {
      console.log(error);
      displayErrorNotify(error?.response.status);
    }
  }

  useEffect(() => {
    getHashtagPosts(hashtag);
  }, [hashtag]);

  const user = {
    userName: "Darlon Gomes",
    userImage:
      "https://trello-members.s3.amazonaws.com/5e401956e0cc5673d1a06355/fead8907bb5f5497f69463bff9d0f015/50.png",
  };

  return (
    <>
      <Header props={user} title={`# ${hashtag}`} />
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
