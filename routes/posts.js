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
    getJobSearchLatestPosts
} from "../controllers/Posts.js";

const router = express.Router();

router.post("/", createPost);
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
router.get("/:id", getPost);
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);

export default router;

