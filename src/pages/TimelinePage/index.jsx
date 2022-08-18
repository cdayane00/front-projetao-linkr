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
  WithContent,
} from "../../components/Timeline";
import Sidebar from "../../components/Sidebar";

import LoadingCard from "../../components/Timeline/loading";
import PostInput from "../../components/Timeline/make-a-post";
import { HandlerContext } from "../../contexts/handlerContext";
import { getPosts, listHashtags } from "../../services/api";
import { callToast } from "../../utils";

export default function Timeline() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [hashtagData, setHashtag] = useState(null);
  const [emptyRender, setRender] = useState(null);
  const [postData, setPostData] = useState([]);
  const { refresh, userData, logout } = useContext(HandlerContext);
  const [currentPage, setCurrentPage] = useState(0);
  const [end, setEnd] = useState(false);
  const navigate = useNavigate();
  const ref = useRef();
  const text = `Unfortunately there are no more posts, you've seen them all`;
  async function getPageData() {
    setLoading(true);
    const promiseTrendingTags = listHashtags(userData.config);
    const promisePosts = getPosts(currentPage, userData.config);
    try {
      const [hashtagsResponse, postsResponse] = await Promise.all([
        promiseTrendingTags,
        promisePosts,
      ]);
      setHashtag(hashtagsResponse.data);
      if (postsResponse.statusText === "Partial Content") {
        setRender(206);
        return;
      }
      if (postsResponse.statusText === "No Content") {
        setRender(204);
        return;
      }
      setPostData(postsResponse.data);

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
      const promise = await getPosts(currentPage, userData.config);
      if (promise?.data?.length < 10 && postData?.length > 0) {
        setPostData((prevInsideState) => [...prevInsideState, ...promise.data]);
        setEnd((prev) => !prev);
        return;
      }
      if (promise?.statusText === "Partial Content") {
        setRender(206);
        return;
      }
      if (promise?.statusText === "No Content") {
        setRender(204);
        return;
      }
      if (postData?.length > 0) {
        setPostData((prevInsideState) => [...prevInsideState, ...promise.data]);
      }
    }
    if (currentPage > 0) {
      getPostsByPage();
    }
  }, [currentPage]);

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        setTimeout(() => {
          setCurrentPage((prev) => prev + 1);
        }, 1000);
      }
    });
    if (ref.current) {
      intersectionObserver.observe(ref.current);
    }
    return () => intersectionObserver.disconnect();
  }, [loading]);

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
            {!loading && !error && emptyRender === 204 && (
              <>
                <PostInput />
                <WithoutContent />
              </>
            )}
            {!loading && !error && emptyRender === 206 && (
              <>
                <PostInput />
                <WithoutFollow />
              </>
            )}
            {!loading && !error && !emptyRender && postData?.length > 0 && (
              <>
                <PostInput />
                <WithContent postData={postData} userData={userData} />
              </>
            )}
            {!loading && !end && !emptyRender && postData && (
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
