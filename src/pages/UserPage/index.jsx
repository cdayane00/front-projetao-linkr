import React, { useState, useEffect, useContext, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";
import Header from "../../components/Header";
import { getPostsByUser, listHashtags } from "../../services/api";
import Post from "../../components/Timeline/postcard";
import { Main, Content, Feed } from "../TimelinePage/styles";
import Sidebar from "../../components/Sidebar";
import { callToast } from "../../utils";
import LoadingCard from "../../components/Timeline/loading";
import { WithError } from "../../components/Timeline";
import { HandlerContext } from "../../contexts/handlerContext";

export default function UserPage() {
  const { userData, refresh, logout, setInteraction } =
    useContext(HandlerContext);
  const { id } = useParams();
  const [currentPage, setCurrentPage] = useState(0);
  const [end, setEnd] = useState(false);
  const [hashtagData, setHashtagData] = useState(null);
  const [postData, setPostData] = useState([]);
  const [user, setUser] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [error, setError] = useState();
  const ref = useRef();
  const top = useRef();
  const text = `Unfortunately there are no more posts, you've seen them all`;
  async function getPageData() {
    setCurrentPage(() => 0);
    setPostData(() => []);
    setEnd(() => false);
    setLoading(true);
    const promiseHashtags = listHashtags(userData.config);
    const promisePostById = getPostsByUser(id, 0, userData.config);
    try {
      const [responseHashtags, responsePostById] = await Promise.all([
        promiseHashtags,
        promisePostById,
      ]);
      setHashtagData(responseHashtags?.data);
      setUser(responsePostById?.data?.user);
      setPostData(responsePostById?.data?.posts);
      setInteraction(responsePostById.data.follow.interaction);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
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
    getPageData();
  }, [id, refresh]);
  useEffect(() => {
    async function getPostsByPage() {
      try {
        const promise = await getPostsByUser(id, currentPage, userData.config);
        if (promise?.data?.posts?.length < 10) {
          setPostData((prevInsideState) => [
            ...prevInsideState,
            ...promise.data.posts,
          ]);
          setEnd((prev) => !prev);
          return;
        }
        setPostData((prevInsideState) => [
          ...prevInsideState,
          ...promise.data.posts,
        ]);
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
  }, [isLoading]);

  return (
    <>
      <Header
        props={userData}
        userPhoto={user?.photo}
        title={`${user?.name || error}'s posts`}
        loading={isLoading}
        id={id}
        followers={user?.followersCount}
      />
      <Main>
        <Content>
          <Feed ref={top}>
            {isLoading && (
              <>
                <LoadingCard />{" "}
              </>
            )}
            {!isLoading && error && <WithError error={error} />}
            {!isLoading &&
              !error &&
              postData?.map((post) => (
                <Post userId={userData.userId} key={post.postId} props={post} />
              ))}
            {!isLoading && !end && (
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
            <Sidebar hashtags={hashtagData} isLoading={isLoading} />
          </Feed>
        </Content>
      </Main>
    </>
  );
}
