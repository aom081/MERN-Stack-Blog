import express from "express";
import { Router } from "express";
import verifyToken from "../middleware/author.middleware.js";
import {
  createPost,
  getPosts,
  getPostById,
  updatePost,
  deletePost,
  getPostsByAuthor,
} from "../Controllers/Post.Controller.js";

const router = express.Router();
//http://localhost:5000/api/v1/post/
router.post("/", verifyToken, createPost);
router.get("/", getPosts);
//http://localhost:5000/api/v1/post/:id
router.get("/:id", getPostById);
router.put("/:id", verifyToken, updatePost);
router.delete("/:id", verifyToken, deletePost);
//http://localhost:5000/api/v1/post/author/:authorId
router.get("/author/:authorId", getPostsByAuthor);

export default router;
