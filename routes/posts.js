import express from 'express';
import { createPost, getPosts, getPost, updatePost } from '../controllers/Posts.js'

const router = express.Router();

router.post('/', createPost)
router.get('/', getPosts)
router.get('/:id', getPost);
router.patch('/:id', updatePost);

export default router