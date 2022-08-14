/* eslint-disable no-unused-vars */
import React, { useEffect, useContext } from "react";
import Header from "../../components/Header";
import { Main, Content, Feed } from "./styles";
import {
  WithContent,
  WithoutContent,
  WithError,
} from "../../components/Timeline";
import Sidebar from "../../components/Sidebar";
import { useLocalStorage, useAxios } from "../../utils/hooks";
import axios from "../../services/api";
import LoadingCard from "../../components/Timeline/loading";
import PostInput from "../../components/Timeline/make-a-post";
import { HandlerContext } from "../../contexts/handlerContext";

export default function Timeline() {
  const [userData] = useLocalStorage("linkrUserData", "");
  const { refresh } = useContext(HandlerContext);
  const [posts, error, loading, axiosFunction] = useAxios();
  const [
    trendingHashtags,
    trendingHashtagsError,
    trendingHashtagsLoading,
    axiosSecFunction,
  ] = useAxios();
  const getData = () => {
    axiosFunction({
      axiosInstance: axios,
      method: "GET",
      url: "/timeline",
      requestConfig: {
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
      },
    });
  };
  const getTrendingHashtags = () => {
    axiosSecFunction({
      axiosInstance: axios,
      method: "GET",
      url: "/hashtags",
      requestConfig: {
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
      },
    });
  };

  useEffect(() => {
    getData();
    getTrendingHashtags();
  }, [refresh]);
  return (
    <>
      <Header props={userData} title="timeline" />
      <Main>
        <Content>
          <Feed>
            {loading && (
              <>
                <PostInput
                  getData={getData}
                  getTrendingHashtags={getTrendingHashtags}
                />
                <LoadingCard />
              </>
            )}
            {!loading && error && <WithError />}
            {!loading && !error && posts?.length && (
              <>
                <PostInput
                  getData={getData}
                  getTrendingHashtags={getTrendingHashtags}
                />
                <WithContent userId={userData.userId} posts={posts} />
              </>
            )}
            {!loading && !error && posts.length === 0 && (
              <>
                <PostInput
                  getData={getData}
                  getTrendingHashtags={getTrendingHashtags}
                />
                <WithoutContent />
              </>
            )}
          </Feed>
          <Sidebar
            isLoading={loading}
            hashtags={trendingHashtags.length && trendingHashtags}
          />
        </Content>
      </Main>
    </>
  );
}
