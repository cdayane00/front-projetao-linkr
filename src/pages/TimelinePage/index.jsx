/* eslint-disable no-unused-vars */
import React, { useEffect, useContext, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";
import Header from "../../components/Header";
import { Main, Content, Feed } from "./styles";
import {
  WithoutContent,
  WithError,
  WithoutFollow,
} from "../../components/Timeline";
import Post from "../../components/Timeline/postcard";
import Sidebar from "../../components/Sidebar";
import { useLocalStorage } from "../../utils/hooks";
import LoadingCard from "../../components/Timeline/loading";
import PostInput from "../../components/Timeline/make-a-post";
import { HandlerContext } from "../../contexts/handlerContext";
import { getPosts, listHashtags } from "../../services/api";
import { callToast, logout } from "../../utils";

export default function Timeline() {
  const [userData] = useLocalStorage("linkrUserData", "");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [hashtagData, setHashtag] = useState(null);
  const [postData, setPostData] = useState(null);
  const { refresh } = useContext(HandlerContext);
  const [currentPage, setCurrentPage] = useState(0);
  const [end, setEnd] = useState(false);
  const navigate = useNavigate();
  const ref = useRef();
  const text = `Unfortunately there are no more posts, you've seen them all`;
  async function getPageData() {
    setLoading(true);
    const promiseTrendingTags = listHashtags();
    try {
      const [hashtagsResponse] = await Promise.all([promiseTrendingTags]);
      setHashtag(hashtagsResponse.data);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    } catch (err) {
      setError(err?.response?.status);
      if (err?.response?.status === 401) {
        logout();
        setTimeout(() => navigate("/"), 3000);
      }
      setLoading(false);
      callToast("error", err?.response?.data?.error);
    }
  }

  useEffect(() => {
    getPageData();
  }, [refresh]);

  useEffect(() => {
    async function getPostsByPage() {
      const promise = await getPosts(currentPage);
      if (promise?.data?.length === postData?.length) {
        setEnd((prev) => !prev);
      }
      setPostData(() => [...promise.data]);
    }
    getPostsByPage();
  }, [currentPage]);

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        setTimeout(() => {
          setCurrentPage((prev) => prev + 1);
        }, 1000);
      }
    });
    intersectionObserver.observe(ref.current);
    return () => intersectionObserver.disconnect();
  }, []);

  return (
    <>
      <Header props={userData} title="timeline" />
      <Main>
        <Content>
          <Feed>
            {loading && (
              <>
                <PostInput />
                <LoadingCard />
              </>
            )}
            {!loading && error && <WithError error={error} />}
            {!loading && !error && postData?.length && (
              <>
                <PostInput />
                {postData.map((e) => (
                  <Post props={e} key={e.postId} userId={userData.userId} />
                ))}
              </>
            )}
            {!loading &&
              !error &&
              postData?.length === 0 &&
              typeof postData !== "string" &&
              currentPage === 1 && (
                <>
                  <PostInput />
                  <WithoutContent />
                </>
              )}
            {!loading && !error && postData === "" && (
              <>
                <PostInput />
                <WithoutFollow />
              </>
            )}
            {postData !== "" && !end && (
              <div className="observer">
                <TailSpin color="#6D6D6D" width={36} />
                <h3 ref={ref}>Loading more posts..</h3>
              </div>
            )}
            {end && (
              <div className="observer">
                <h3>{text}</h3>
              </div>
            )}
          </Feed>
          <Sidebar isLoading={loading} hashtags={hashtagData} />
        </Content>
      </Main>
    </>
  );
}
