import axios from "axios";

const userData = JSON.parse(localStorage.getItem("linkrUserData"));
const config = {
  headers: {
    Authorization: `Bearer ${userData.token}`,
  },
};

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

export const createUser = async (data) => api.post("/sign-up", data);

export const loginUser = async (data) => api.post("/sign-in", data);

export const listHashtags = async () => api.get("/hashtags", config);

export const getUserById = async (id) => api.get(`/user/${id}`, config);

export const getPostsByHashtag = async (hashtag) =>
  api.get(`/hashtags/${hashtag}`, config);

export const deletePost = async (id) => api.delete(`post?id=${id}`, config);

export const getPosts = async (page) =>
  api.get(`/timeline?page=${page}`, config);

export const getUsersByName = async (name) =>
  api.get(`/users?name=${name}`, config);
export const editPost = async (id, data) =>
  api.patch(`post?id=${id}`, data, config);

export const likePost = async (postId) =>
  api.post(`/post/${postId}/like`, {}, config);

export const dislikePost = async (postId) =>
  api.post(`/post/${postId}/dislike`, {}, config);

export const createPost = async (data) => api.post("/post", data, config);

export const followThisUser = async (id) =>
  api.post(`/user/${id}/interaction`, {}, config);

export const unfollowThisUser = async (id) =>
  api.delete(`user/${id}/interaction`, config);

export const getCommentsByPostId = async (postId) =>
  api.get(`/post/${postId}/comments`, config);

export const submitNewComment = async (postId, commentText) =>
  api.post(`/post/${postId}/comments`, { commentText }, config);
