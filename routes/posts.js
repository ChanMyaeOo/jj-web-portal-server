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
    getLatestPosts,
    commentPost,
    getOwnPosts,
    getPhotoAlbumTotal,
    getNoticeTotal,
    getLivTotal,
    getBuySellTotal,
    getJobSearchTotal
} from "../controllers/Posts.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.post("/", auth, createPost);
router.get('/livtotal', getLivTotal)
router.get("/living-location", getLivingLocationPosts);
router.get("/ptotal", getPhotoAlbumTotal);
router.get("/photo-album", getPhotoAlbumPosts);
router.get("/photo-album-latest", getPhotoAlbumLatestPosts);
router.get("/notice", getNoticePosts);
router.get('/ntotal', getNoticeTotal)
router.get("/notice-latest", getNoticeLatestPosts);
router.get("/btotal", getBuySellTotal)
router.get("/buy-sell", getBuySellPosts);
router.get("/buy-sell-latest", getBuySellLatestPosts);
router.get('/jtotal', getJobSearchTotal)
router.get("/job-search", getJobSearchPosts);
router.get("/job-search-latest", getJobSearchLatestPosts);
router.get("/", getPosts);
router.get("/latestPosts", getLatestPosts);
router.get("/:id/own-posts", getOwnPosts);
router.get("/:id", getPost);
router.patch("/:id", auth, updatePost);
router.delete("/:id", auth, deletePost);
router.post("/:id/commentPost", auth, commentPost);


export default router;
