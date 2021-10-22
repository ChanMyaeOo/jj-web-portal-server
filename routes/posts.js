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
    getJobSearchPosts,
    getNoticeLatestPosts,
    getPhotoAlbumLatestPosts,
    getBuySellLatestPosts,
    getJobSearchLatestPosts,
    getLatestPosts
} from "../controllers/Posts.js";
import auth from '../middleware/auth.js'

const router = express.Router();

router.post("/", auth, createPost);
router.get("/living-location", getLivingLocationPosts);
router.get("/photo-album", getPhotoAlbumPosts);
router.get("/photo-album-latest", getPhotoAlbumLatestPosts);
router.get("/notice", getNoticePosts);
router.get('/notice-latest', getNoticeLatestPosts);
router.get("/buy-sell", getBuySellPosts);
router.get("/buy-sell-latest", getBuySellLatestPosts);
router.get('/job-search', getJobSearchPosts)
router.get('/job-search-latest', getJobSearchLatestPosts)
router.get("/", getPosts);
router.get('/latestPosts', getLatestPosts);
router.get("/:id", getPost);
router.patch("/:id", auth, updatePost);
router.delete("/:id", auth, deletePost);

export default router;

