import axios from "axios";

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

export const createUser = async (data) => api.post("/sign-up", data);

export const loginUser = async (data) => api.post("/sign-in", data);

export const listHashtags = async (config) => api.get("/hashtags", config);

export const getUserById = async (id, config) => api.get(`/user/${id}`, config);

export const getPostsByHashtag = async (hashtag, config) =>
  api.get(`/hashtags/${hashtag}`, config);

export const deletePost = async (id, config) =>
  api.delete(`post?id=${id}`, config);

export const getPosts = async (page, config) =>
  api.get(`/timeline?page=${page}`, config);

export const getUsersByName = async (name, config) =>
  api.get(`/users?name=${name}`, config);
export const editPost = async (id, data, config) =>
  api.patch(`post?id=${id}`, data, config);

export const likePost = async (postId, config) =>
  api.post(`/post/${postId}/like`, {}, config);

export const dislikePost = async (postId, config) =>
  api.post(`/post/${postId}/dislike`, {}, config);

export const createPost = async (data, config) =>
  api.post("/post", data, config);

export const followThisUser = async (id, config) =>
  api.post(`/user/${id}/interaction`, {}, config);

export const unfollowThisUser = async (id, config) =>
  api.delete(`user/${id}/interaction`, config);

export const getCommentsByPostId = async (postId, config) =>
  api.get(`/post/${postId}/comments`, config);

export const submitNewComment = async (postId, commentText, config) =>
  api.post(`/post/${postId}/comments`, { commentText }, config);
