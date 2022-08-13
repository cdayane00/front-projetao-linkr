import axios from "axios";

export default axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

export const createUser = async (data) => api.post("/sign-up", data);

export const loginUser = async (data) => api.post("/sign-in", data);

export const listHashtags = async (config) => api.get("/hashtags", config);

export const getPostsByHashtag = async (hashtag, config) =>
  api.get(`/hashtags/${hashtag}`, config);

export const deletePost = async (id, config) =>
  api.delete(`post?id=${id}`, config);

export const getPosts = async (config) => api.get("/post", config);
