import React, { useEffect } from "react";
import Header from "../../components/Header";
import { Main, Content, Feed } from "./styles";
import { WithContent } from "../../components/Timeline";
import Sidebar from "../../components/Sidebar";
import { useLocalStorage, useAxios } from "../../utils/hooks";
import axios from "../../services/api";
import LoadingCard from "../../components/Timeline/loading";

export default function Timeline() {
  const [userData] = useLocalStorage("linkrUserData", "");
  const [posts, error, loading, axiosFunction] = useAxios();
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
  useEffect(() => {
    getData();
    // eslint-disable-next-line
  },[])
  return (
    <>
      <Header props={userData} />
      <Main>
        <Content>
          <Feed>
            {loading && <LoadingCard />}
            {!loading && !error && posts?.length && (
              <WithContent userData={userData} posts={posts} />
            )}
          </Feed>
          <Sidebar props={hashtag} />
        </Content>
      </Main>
    </>
  );
}
