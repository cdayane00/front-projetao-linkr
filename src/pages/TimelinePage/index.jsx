/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
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

export default function Timeline() {
  const [userData] = useLocalStorage("linkrUserData", "");
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
  }, []);
  return (
    <>
      <Header props={userData} title="timeline" />

      <Main>
        <Content>
          <Feed>
            {loading && (
              <>
                <PostInput userData={userData} getData={getData} />
                <LoadingCard />
              </>
            )}
            {!loading && error && <WithError />}
            {!loading && !error && posts?.length && (
              <>
                <PostInput userData={userData} getData={getData} />
                <WithContent
                  userData={userData}
                  posts={posts}
                  getData={getData}
                />
              </>
            )}
            {!loading && !error && posts.length === 0 && (
              <>
                <PostInput userData={userData} getData={getData} />
                <WithoutContent />
              </>
            )}
          </Feed>
          <Sidebar hashtags={trendingHashtags} />
        </Content>
      </Main>
    </>
  );
}
