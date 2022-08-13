import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import { useLocalStorage } from "../../utils/hooks";
import { UserMain, UserContent, UserFeed } from "./styles";
import { getUserById } from "../../services/api";
import Post from "../../components/Timeline/postcard";

export default function UserPage() {
  const [userData] = useLocalStorage("linkrUserData", "");
  const { id } = useParams();
  const [userDataAPI, setUserDataAPI] = useState(null);
  async function getPostsById(userId) {
    try {
      const promisePost = await getUserById(userId);
      setUserDataAPI(promisePost.data);
    } catch (erro) {
      console.log(erro);
    }
  }

  useEffect(() => {
    getPostsById(id);
  }, [id]);
  console.log(userDataAPI);
  return (
    <>
      <Header
        props={userData}
        userPhoto={userDataAPI?.user?.photo}
        title={`${userDataAPI?.user?.name} posts`}
      />
      <UserMain>
        <UserContent>
          <UserFeed>
            {userDataAPI?.posts?.map((post) => (
              <Post
                userId={userDataAPI?.user?.id}
                key={post.postId}
                username={post.usermame}
                photo={post.photo}
                props={post}
              />
            ))}
          </UserFeed>
        </UserContent>
      </UserMain>
    </>
  );
}
