import express from "express";
import {
    createPost,
    getPosts,
    getPost,
    updatePost,
    deletePost,
    getLivingLocationPosts,
    getPhotoAlbumPosts,
    getNoticePosts,
    getBuySellPosts,
    getJobSearchPosts
} from "../controllers/Posts.js";

const router = express.Router();

router.post("/", createPost);
router.get("/living-location", getLivingLocationPosts);
router.get("/photo-album", getPhotoAlbumPosts);
router.get("/notice", getNoticePosts);
router.get("/buy-sell", getBuySellPosts);
router.get('/job-search', getJobSearchPosts)
router.get("/", getPosts);
router.get("/:id", getPost);
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);

export default router;
