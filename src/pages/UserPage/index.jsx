import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import { useLocalStorage } from "../../utils/hooks";
import { getUserById, listHashtags } from "../../services/api";
import Post from "../../components/Timeline/postcard";
import { Main, Content, Feed } from "../TimelinePage/styles";
import Sidebar from "../../components/Sidebar";
import { callToast } from "../../utils";
import LoadingCard from "../../components/Timeline/loading";

export default function UserPage() {
  const [userData] = useLocalStorage("linkrUserData", "");
  const { id } = useParams();
  const [userDataAPI, setUserDataAPI] = useState(null);
  const [trendingTags, setTrendingTags] = useState(null);
  const [isLoading, setLoading] = useState(true);
  async function getHastgs(token) {
    try {
      const promise = await listHashtags(token);
      setTrendingTags(promise.data);
    } catch (error) {
      callToast("error", error?.response?.data?.error);
    }
  }

  async function getPostsById(userId) {
    try {
      const promisePost = await getUserById(userId);
      setUserDataAPI(promisePost.data);
    } catch (error) {
      callToast("error", error?.response?.data?.error);
    }
  }

  async function getPageData(config) {
    try {
      await getHastgs(config);
      await getPostsById(id);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    } catch (error) {
      callToast("error", error?.response?.data?.error);
    }
  }

  useEffect(() => {
    const config = {
      headers: {
        authorization: `Bearer ${userData.token}`,
      },
    };
    getPageData(config);
  }, [id]);

  return (
    <>
      <Header
        props={userData}
        userPhoto={userDataAPI?.user?.photo}
        title={`${userDataAPI?.user?.name}'s posts`}
        loading={isLoading}
      />
      <Main>
        <Content>
          <Feed>
            {isLoading && <LoadingCard />}
            {!isLoading &&
              userDataAPI?.posts?.map((post) => (
                <Post
                  userId={userDataAPI?.user?.id}
                  key={post.postId}
                  username={post.usermame}
                  photo={post.photo}
                  props={post}
                />
              ))}
          </Feed>
          <Sidebar hashtags={trendingTags} isLoading={isLoading} />
        </Content>
      </Main>
    </>
  );
}
