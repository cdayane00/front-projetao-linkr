/* eslint-disable no-unused-vars */
import React, { useState } from "react";

import { Card, CardSide, CardDetails } from "./style";
import { useAxios } from "../../../utils/hooks";
import axios from "../../../services/api";

export default function PostInput({ userData, getData }) {
  const [result, error, loading, axiosFunction] = useAxios();
  const postModel = { text: "", url: "" };
  const [postData, setPostData] = useState(postModel);
  function handleChange(e) {
    const { name, value } = e.target;
    setPostData({ ...postData, [name]: value });
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
    getData();
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
            required
            disabled={loading}
          />
          <button type="submit">Publish</button>
        </form>
      </CardDetails>
    </Card>
  );
}
