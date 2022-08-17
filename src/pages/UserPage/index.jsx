import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import { getUserById, listHashtags } from "../../services/api";
import Post from "../../components/Timeline/postcard";
import { Main, Content, Feed } from "../TimelinePage/styles";
import Sidebar from "../../components/Sidebar";
import { callToast, logout } from "../../utils";
import LoadingCard from "../../components/Timeline/loading";
import { WithError } from "../../components/Timeline";
import { HandlerContext } from "../../contexts/handlerContext";

export default function UserPage() {
  const { userData, refresh } = useContext(HandlerContext);
  const { id } = useParams();
  const [pageData, setPageData] = useState();
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [error, setError] = useState();
  async function getPageData() {
    setLoading(true);
    const promiseHashtags = listHashtags(userData.config);
    const promisePostById = getUserById(id, userData.config);
    try {
      const [responseHashtags, responsePostById] = await Promise.all([
        promiseHashtags,
        promisePostById,
      ]);
      setPageData({
        hashtags: responseHashtags.data,
        data: responsePostById.data,
      });
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
    getPageData();
  }, [id, refresh]);
  return (
    <>
      <Header
        props={userData}
        userPhoto={pageData?.data?.user?.photo}
        title={`${pageData?.data?.user?.name || error}'s posts`}
        loading={isLoading}
        prop={pageData?.data?.follow?.interaction}
        id={id}
        followers={pageData?.data?.user?.followersCount}
      />
      <Main>
        <Content>
          <Feed>
            {isLoading && (
              <>
                <LoadingCard />{" "}
              </>
            )}
            {!isLoading && error && <WithError error={error} />}
            {!isLoading &&
              !error &&
              pageData?.data?.posts.map((post) => (
                <Post userId={userData.userId} key={post.postId} props={post} />
              ))}
            <Sidebar hashtags={pageData?.hashtags} isLoading={isLoading} />
          </Feed>
        </Content>
      </Main>
    </>
  );
}
