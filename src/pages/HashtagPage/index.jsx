import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Header from "../../components/Header";
import Post from "../../components/Timeline/postcard";
import Sidebar from "../../components/Sidebar";

import { Main, Content, Feed } from "../TimelinePage/styles";
import { FeedHashtag, HashtagMain, PageContent } from "./styles";
import { displayErrorNotify } from "../../utils";
import { getPostsByHashtag } from "../../services/api";

export default function Timeline() {
  const { hashtag } = useParams();
  const [hashtagDataAPI, setHashtagDataAPI] = useState(null);

  async function getHashtagPosts(hashtagName) {
    try {
      const promise = await getPostsByHashtag(hashtagName);
      setHashtagDataAPI(promise.data);
    } catch (error) {
      console.log(error);
      displayErrorNotify(error?.response.status);
    }
  }

  useEffect(() => {
    getHashtagPosts(hashtag);
  }, []);

  const user = {
    userName: "Darlon Gomes",
    userImage:
      "https://trello-members.s3.amazonaws.com/5e401956e0cc5673d1a06355/fead8907bb5f5497f69463bff9d0f015/50.png",
  };

  const hashtags = [
    { hashtag: "javascript" },
    { hashtag: "react" },
    { hashtag: "react-native" },
    { hashtag: "driven" },
    { hashtag: "css" },
    { hashtag: "html" },
    { hashtag: "node" },
    { hashtag: "sql" },
    { hashtag: "mongo" },
    { hashtag: "typescript" },
  ];

  return (
    <>
      <Header props={user} title={`# ${hashtag}`} />
      <HashtagMain as={Main}>
        <PageContent as={Content}>
          <FeedHashtag as={Feed}>
            {hashtagDataAPI?.hashtagPosts.map((e, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <Post key={index + 1} props={e} />
            ))}
          </FeedHashtag>
          <Sidebar props={hashtags} />
        </PageContent>
      </HashtagMain>
    </>
  );
}
