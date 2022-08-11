/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import { Main, Content, Feed } from "./styles";
import { WithContent } from "../../components/Timeline";
import Sidebar from "../../components/Sidebar";
import { useLocalStorage, useAxios } from "../../utils/hooks";
import axios from "../../services/api";
import LoadingCard from "../../components/Timeline/loading";
// https://back-projetao-linkr.herokuapp.com
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
            {loading && <LoadingCard />}
            {!loading && !error && posts?.length && (
              <WithContent
                userData={userData}
                posts={posts}
                getData={getData}
              />
            )}
          </Feed>
          <Sidebar hashtags={trendingHashtags} />
        </Content>
      </Main>
    </>
  );
}
