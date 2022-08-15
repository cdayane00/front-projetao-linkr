/* eslint-disable no-unused-vars */
import React, { useState, useContext } from "react";
import { HandlerContext } from "../../../contexts/handlerContext";
import { Card, CardSide, CardDetails } from "./style";
import ButtonRender from "./button";
import { useLocalStorage } from "../../../utils/hooks";
import { createPost } from "../../../services/api";
import { callToast } from "../../../utils";

export default function PostInput() {
  const [userData] = useLocalStorage("linkrUserData", "");
  const { refresh, setRefresh } = useContext(HandlerContext);
  const [isSubmitting, setSubmit] = useState(false);
  const postModel = { text: "", url: "" };
  const [postData, setPostData] = useState(postModel);
  function handleChange(e) {
    const { name, value } = e.target;
    setPostData({ ...postData, [name]: value });
  }

  async function submitPost(e) {
    e.preventDefault();
    setSubmit(true);
    const data = {
      postUrl: postData.url,
      postText: postData.text,
    };
    const config = {
      headers: {
        Authorization: `Bearer ${userData.token}`,
      },
    };
    try {
      await createPost(data, config);
      setTimeout(() => {
        setSubmit(false);
        setRefresh(!refresh);
      }, 1000);
    } catch (error) {
      callToast(
        "error",
        error?.response?.data?.error || error?.response?.error
      );
      setSubmit(false);
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
            autoComplete="off"
            required
            disabled={isSubmitting}
          />
          <textarea
            name="text"
            className="text"
            type="text"
            value={postData.text}
            onChange={(e) => handleChange(e)}
            placeholder="Awesome article about #javascript"
            disabled={isSubmitting}
          />
          <ButtonRender loading={isSubmitting} />
        </form>
      </CardDetails>
    </Card>
  );
}
