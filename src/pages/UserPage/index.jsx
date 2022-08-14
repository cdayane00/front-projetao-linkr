import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import { useLocalStorage } from "../../utils/hooks";
import { getUserById, listHashtags } from "../../services/api";
import Post from "../../components/Timeline/postcard";
import { Main, Content, Feed } from "../TimelinePage/styles";
import Sidebar from "../../components/Sidebar";
import { callToast } from "../../utils";
import LoadingCard from "../../components/Timeline/loading";

export default function UserPage() {
  const [userData] = useLocalStorage("linkrUserData", "");
  const { id } = useParams();
  const [pageData, setPageData] = useState();
  const [isLoading, setLoading] = useState(true);

  async function getPageData(config) {
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
    } catch (error) {
      callToast("error", error?.response?.data?.error);
    }
  }
  useEffect(() => {
    setLoading(true);
    const config = {
      headers: {
        authorization: `Bearer ${userData.token}`,
      },
    };
    getPageData(config);
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
            {!isLoading &&
              pageData.data.posts.map((post) => (
                <Post userId={userData.userId} key={post.postId} props={post} />
              ))}
            <Sidebar hashtags={pageData?.hashtags} isLoading={isLoading} />
          </Feed>
        </Content>
      </Main>
    </>
  );
}
