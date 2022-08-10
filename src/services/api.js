import axios from "axios";

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

export const createUser = async (data) => api.post("/sign-un", data);
export const loginUser = async (data) => api.post("/sign-in", data);
