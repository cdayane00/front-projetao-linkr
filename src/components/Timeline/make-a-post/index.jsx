/* eslint-disable no-unused-vars */
import React, { useState } from "react";

import { Card, CardSide, CardDetails } from "./style";
import ButtonRender from "./button";
import { useAxios } from "../../../utils/hooks";
import axios from "../../../services/api";
import { displayErrorNotify } from "../../../utils";

export default function PostInput({ userData, getData, getTrendingHashtags }) {
  const [result, error, loading, axiosFunction] = useAxios();
  const postModel = { text: "", url: "" };
  const [postData, setPostData] = useState(postModel);
  function handleChange(e) {
    const { name, value } = e.target;
    setPostData({ ...postData, [name]: value });
  }
  function handleError() {
    // trocar pela versão 2.0
    displayErrorNotify(`
    There was an error publishing your post`);
    setPostData(postModel);
  }

  async function submitPost(e) {
    e.preventDefault();

    await axiosFunction({
      axiosInstance: axios,
      method: "POST",
      url: "/post",
      requestConfig: {
        data: {
          postUrl: postData.url,
          postText: postData.text,
        },
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
      },
    });
    if (error) {
      handleError();
    } else {
      getData();
      getTrendingHashtags();
    }
  }
  return (
    <Card>
      <CardSide>
        <img src={userData.photo} alt="user" />
      </CardSide>
      <CardDetails>
        <p>What are you going to share today?</p>
        <form onSubmit={(e) => submitPost(e)}>
          <input
            name="url"
            type="text"
            value={postData.url}
            onChange={(e) => handleChange(e)}
            placeholder="https://..."
            required
            disabled={loading}
          />
          <textarea
            name="text"
            className="text"
            type="text"
            value={postData.text}
            onChange={(e) => handleChange(e)}
            placeholder="Awesome article about #javascript"
            disabled={loading}
          />
          <ButtonRender loading={loading} />
        </form>
      </CardDetails>
    </Card>
  );
}
