import React, { useEffect, useState, useContext, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { TailSpin } from "react-loader-spinner";
import Header from "../../components/Header";
import Post from "../../components/Timeline/postcard";
import Sidebar from "../../components/Sidebar";
import { WithError } from "../../components/Timeline";
import { Main, Content, Feed } from "../TimelinePage/styles";
import { FeedHashtag, HashtagMain, PageContent } from "./styles";
import { callToast } from "../../utils";
import { getPostsByHashtag, listHashtags } from "../../services/api";
import LoadingCard from "../../components/Timeline/loading";
import { HandlerContext } from "../../contexts/handlerContext";

export default function HashtagPage() {
  const { hashtag } = useParams();
  const { refresh, userData, logout } = useContext(HandlerContext);
  const navigate = useNavigate();
  const [hashtagData, setHashtagData] = useState(null);
  const [postData, setPostData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [end, setEnd] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const ref = useRef();
  const top = useRef();
  const text = `Unfortunately there are no more posts, you've seen them all`;
  async function getPageInfo() {
    setCurrentPage(() => 0);
    setPostData(() => []);
    setEnd(() => false);
    setLoading(true);
    const promiseTrendingTags = listHashtags(userData.config);
    const promisePosts = await getPostsByHashtag(hashtag, 0, userData.config);
    try {
      const [trendingHashtagsResponse, postsResponse] = await Promise.all([
        promiseTrendingTags,
        promisePosts,
      ]);
      setHashtagData(trendingHashtagsResponse.data);
      setPostData(postsResponse.data);
      setTimeout(() => setLoading(false), 1500);
    } catch (err) {
      setLoading(false);
      if (err?.response?.status === 401) {
        logout();
        setTimeout(() => navigate("/"), 3000);
      }
      setError(err?.response?.status);
      callToast("error", err?.response?.data?.error);
    }
  }

  useEffect(() => {
    top.current.scrollIntoView({
      block: "end",
    });
    getPageInfo();
  }, [hashtag, refresh]);
  useEffect(() => {
    async function getPostsByPage() {
      try {
        const promise = await getPostsByHashtag(
          hashtag,
          currentPage,
          userData.config
        );
        if (promise?.data?.length < 10) {
          setPostData((prevInsideState) => [
            ...prevInsideState,
            ...promise.data,
          ]);
          setEnd((prev) => !prev);
          return;
        }

        setPostData((prevInsideState) => [...prevInsideState, ...promise.data]);
      } catch (err) {
        callToast("error", err?.response?.data?.error);
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

  const skeletonLoading = loading && <LoadingCard />;
  const posts =
    !loading &&
    postData?.map((post) => (
      <Post userId={userData.userId} key={post.postId} props={post} />
    ));

  return (
    <>
      <Header props={userData} title={`# ${hashtag}`} />
      <HashtagMain as={Main}>
        <PageContent as={Content}>
          <FeedHashtag as={Feed} ref={top}>
            {error && <WithError error={error} />}
            {skeletonLoading}
            {posts}
            {!loading && !end && (
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
          </FeedHashtag>
          <Sidebar isLoading={loading} hashtags={hashtagData} />
        </PageContent>
      </HashtagMain>
    </>
  );
}
