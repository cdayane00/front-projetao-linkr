import React from "react";
import Header from "../../components/Header";
import { Main, Content, Feed } from "./styles";
import Post from "../../components/Timeline/postcard";
import PostInput from "../../components/Timeline/make-a-post";
import Sidebar from "../../components/Sidebar";

export default function Timeline() {
  const obj = {
    userName: "Arthur Trem-bala",
    userImage:
      "https://pps.whatsapp.net/v/t61.24694-24/199231013_524070082187046_4730781964146693971_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AVyU5HClpO9FaZmfYOr90y1RCJe48khO1v9WV6Lb1chKtw&oe=6300F066",
    likeCount: 999,
    postText:
      "Muito maneiro esse tutorial de Material UI com React, deem uma olhada! #react #material.Muito maneiro esse tutorial de Material UI com React, deem uma olhada! #react #material.Muito maneiro esse tutorial de Material UI com React, deem uma olhada! #react #material",
    metaTitle: "Programming memes for developers",
    metaText:
      "These programming memes are relatable, hilarious, and everything software developers and programmers need to get rid of the Monday morning blues.",
    metaUrl: "https://www.cometchat.com/blog/programming-memes-for-developers",
    metaImage:
      "https://assets-global.website-files.com/5f3c19f18169b62a0d0bf387/60d33be8cf4ba7565123c8bc_YPD3ulQQAGQpOcnqIm3QzSTRgzmr1SexpW9ZjMpJ1mAnUxx4iF05XOTu44sk0qQG-8XgBcYmGZGAD-5SAZvJl3TjtmhgWnn-w0C2XKwhBscV78RVvhwZfyp0v_Pa6sNj5zxpOvRW.png",
  };
  const user = {
    userName: "Darlon Gomes",
    userImage:
      "https://trello-members.s3.amazonaws.com/5e401956e0cc5673d1a06355/fead8907bb5f5497f69463bff9d0f015/50.png",
  };
  const arr = [obj, obj, obj, obj];
  const hashtag = [
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
      <Header props={user} />
      <Main>
        <Content>
          <Feed>
            <PostInput props={user} />
            {arr.map((e) => (
              <Post props={e} />
            ))}
          </Feed>
          <Sidebar props={hashtag} />
        </Content>
      </Main>
    </>
  );
}
