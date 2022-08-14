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

export const getUserById = async (id) => api.get(`/user/${id}`);

export const getPostsByHashtag = async (hashtag, config) =>
  api.get(`/hashtags/${hashtag}`, config);

export const deletePost = async (id, config) =>
  api.delete(`post?id=${id}`, config);

export const getPosts = async (config) => api.get("/timeline", config);

export const getUsersByName = async (name) => api.get(`/users?name=${name}`);
export const editPost = async (id, data, config) =>
  api.patch(`post?id=${id}`, data, config);

export const createPost = async (data, config) =>
  api.post("/post", data, config);
