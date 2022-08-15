import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import { useLocalStorage } from "../../utils/hooks";
import { getUserById, listHashtags } from "../../services/api";
import Post from "../../components/Timeline/postcard";
import { Main, Content, Feed } from "../TimelinePage/styles";
import Sidebar from "../../components/Sidebar";
import { callToast, logout } from "../../utils";
import LoadingCard from "../../components/Timeline/loading";
import { WithError } from "../../components/Timeline";

export default function UserPage() {
  const [userData] = useLocalStorage("linkrUserData", "");
  const { id } = useParams();
  const [pageData, setPageData] = useState();
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [error, setError] = useState();
  async function getPageData() {
    setLoading(true);
    const config = {
      headers: {
        authorization: `Bearer ${userData.token}`,
      },
    };
    const promiseHashtags = listHashtags(config);
    const promisePostById = getUserById(id);
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
      setError(err?.response?.status);
      callToast("error", err?.response?.data?.error);
    }
  }
  useEffect(() => {
    if (!userData.token) {
      setError(401);
      callToast("error", "Log in to have access to this page");
      setTimeout(() => {
        logout();
        navigate("/");
      }, 3000);
    } else {
      getPageData();
    }
  }, [id]);
  return (
    <>
      <Header
        props={userData}
        userPhoto={pageData?.data?.user?.photo}
        title={`${pageData?.data?.user?.name}'s posts`}
        loading={isLoading}
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
