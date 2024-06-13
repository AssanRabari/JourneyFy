import express from "express";
import { verifyToken } from "../middleware/verifyToken.js"
import { createPost, deletePost, getPost, getPosts, savePost, updatePost } from "../controllers/post.controller.js";
const router = express.Router();

router.get("/", getPosts)
router.get("/:id", getPost)
router.post("/", verifyToken, createPost);
router.put("/:id", verifyToken, updatePost)
router.delete("/:id", verifyToken, deletePost)
router.delete("/save", verifyToken, savePost)


export default router;
