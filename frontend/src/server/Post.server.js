import api from "./api";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api/v1";

const getAllPosts = async () => {
  return await api.get(`${API_URL}/post`);
};

const getPostById = async (postId) => {
  return await api.get(`${API_URL}/post/${postId}`);
};

const getByAuthorId = async (authorId) => {
  return await api.get(`${API_URL}/post/author/${authorId}`);
};
const createPost = async (post) => {
  return await api.post(`${API_URL}/post`, post);
};

const updatePost = async (postId, post) => {
  return await api.put(`${API_URL}/post/${postId}`, post);
};

const deletePost = async (postId) => {
  return await api.delete(`${API_URL}/post/${postId}`);
};

const postService = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
};

export default postService;
