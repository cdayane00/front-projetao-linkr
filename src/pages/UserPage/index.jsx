import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import { useLocalStorage } from "../../utils/hooks";
import { getUserById, listHashtags } from "../../services/api";
import Post from "../../components/Timeline/postcard";
import { Main, Content, Feed } from "../TimelinePage/styles";
import Sidebar from "../../components/Sidebar";

export default function UserPage() {
  const [userData] = useLocalStorage("linkrUserData", "");
  const { id } = useParams();
  const [userDataAPI, setUserDataAPI] = useState(null);
  const [trendingTags, setTrendingTags] = useState(null);

  async function getHastgs(token) {
    try {
      const promise = await listHashtags(token);
      setTrendingTags(promise.data);
    } catch (erro) {
      console.log(erro);
    }
  }

  async function getPostsById(userId) {
    try {
      const promisePost = await getUserById(userId);
      setUserDataAPI(promisePost.data);
    } catch (erro) {
      console.log(erro);
    }
  }

  useEffect(() => {
    const config = {
      headers: {
        authorization: `Bearer ${userData.token}`,
      },
    };

    getHastgs(config);

    getPostsById(id);
  }, [id]);
  console.log(userDataAPI);
  return (
    <>
      <Header
        props={userData}
        userPhoto={userDataAPI?.user?.photo}
        title={`${userDataAPI?.user?.name}'s posts`}
      />
      <Main>
        <Content>
          <Feed>
            {userDataAPI?.posts?.map((post) => (
              <Post
                userId={userDataAPI?.user?.id}
                key={post.postId}
                username={post.usermame}
                photo={post.photo}
                props={post}
              />
            ))}
          </Feed>
          <Sidebar hashtags={trendingTags} />
        </Content>
      </Main>
    </>
  );
}
