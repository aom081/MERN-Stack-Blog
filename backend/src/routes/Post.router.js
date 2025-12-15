import express from "express";
import { Router } from "express";
import {createPost, getPosts, getPostById, updatePost, deletePost} from "../Controllers/Post.Controller.js";

const router = express.Router();
//http://localhost:5000/api/v1/posts/
router.post("/", createPost);
router.get("/", getPosts);
//http://localhost:5000/api/v1/posts/:id
router.get("/:id", getPostById);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);



export default router;
