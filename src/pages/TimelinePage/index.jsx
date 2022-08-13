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
import MyDialog from "../../components/Timeline/dialog";

export default function Timeline() {
  const [isOpen, setIsOpen] = useState(false);
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
      <MyDialog isOpen={isOpen} setIsOpen={setIsOpen} />
      <Main>
        <Content>
          <Feed>
            {loading && (
              <>
                <PostInput
                  userData={userData}
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
                  userData={userData}
                  getData={getData}
                  getTrendingHashtags={getTrendingHashtags}
                />
                <WithContent
                  userId={userData.userId}
                  posts={posts}
                  setIsOpen={setIsOpen}
                />
              </>
            )}
            {!loading && !error && posts.length === 0 && (
              <>
                <PostInput
                  userData={userData}
                  getData={getData}
                  getTrendingHashtags={getTrendingHashtags}
                />
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
