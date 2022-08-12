import axios from "axios";

export default axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

export const createUser = async (data) => api.post("/sign-up", data);

export const loginUser = async (data) => api.post("/sign-in", data);

export const listHashtags = async () => api.get("/hashtags");

export const getPostsByHashtag = async (hashtag) =>
  api.get(`/hashtags/${hashtag}`);

export const getUserById = async (id) => api.get(`/user/${id}`);
