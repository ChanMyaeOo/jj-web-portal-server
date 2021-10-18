import PostModel from '../models/posts.js'
import mongoose from 'mongoose';

export const createPost = async (req, res) => {
    const post = req.body;
    const newPost = new PostModel({ ...post, createdAt: new Date().toISOString() })

    try {
        await newPost.save();

        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const getPosts = async (req, res) => {
    try {
        const posts = await PostModel.find();
        res.status(200).json(posts)
    } catch (error) {
        res.status(404).json({ message: error.message})
    }
}

export const getLatestPosts = async (req, res) => {
    try {
        const posts = await PostModel.find().sort({ _id: -1}).limit(6)
        res.status(200).json(posts)
    } catch (error) {
        res.status(404).json({ message: error.message})
    }
}

export const getPost = async (req, res) => { 
    const { id } = req.params;

    try {
        const post = await PostModel.findById(id);
        
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const updatePost = async (req, res) => {
    const { id } = req.params;
    const { title, message, selectedFile } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedPost = { title, message, selectedFile, _id: id };

    await PostModel.findByIdAndUpdate(id, updatedPost, { new: true });

    res.json(updatedPost);
}

export const deletePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await PostModel.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}


export const getLivingLocationPosts = async (req, res) => {
    try {
        const posts = await PostModel.find({ tag: "Living/Location"}).sort({ _id: -1})
        res.status(200).json(posts)
    } catch (error) {
        res.status(404).json({ message: error.message})
    }
}

export const getNoticePosts = async (req, res) => {
    try {
        const posts = await PostModel.find({ tag: "Notice"}).sort({ _id: -1})
        res.status(200).json(posts)
    } catch (error) {
        res.status(404).json({ message: error.message})
    }
}

export const getNoticeLatestPosts = async (req, res) => {
    try {
        const posts = await PostModel.find({ tag: "Notice"}).sort({ _id: -1}).limit(6)
        res.status(200).json(posts)
    } catch (error) {
        res.status(404).json({ message: error.message})
    }
}

export const getPhotoAlbumPosts = async (req, res) => {
    try {
        const posts = await PostModel.find({ tag: "Photo Album"}).sort({ _id: -1})
        res.status(200).json(posts)
    } catch (error) {
        res.status(404).json({ message: error.message})
    }
}

export const getPhotoAlbumLatestPosts = async (req, res) => {
    try {
        const posts = await PostModel.find({ tag: "Photo Album"}).sort({ _id: -1}).limit(6)
        res.status(200).json(posts)
    } catch (error) {
        res.status(404).json({ message: error.message})
    }
}

export const getBuySellPosts = async (req, res) => {
    try {
        const posts = await PostModel.find({ tag: "Home Appliances"}).sort({ _id: -1})
        res.status(200).json(posts)
    } catch (error) {
        res.status(404).json({ message: error.message})
    }
}

export const getBuySellLatestPosts = async (req, res) => {
    try {
        const posts = await PostModel.find({ tag: "Home Appliances"}).sort({ _id: -1}).limit(6)
        res.status(200).json(posts)
    } catch (error) {
        res.status(404).json({ message: error.message})
    }
}

export const getJobSearchPosts = async (req, res) => {
    try {
        const posts = await PostModel.find({ tag: "Recruitment/Job Search"}).sort({ _id: -1})
        res.status(200).json(posts)
    } catch (error) {
        res.status(404).json({ message: error.message})
    }
}

export const getJobSearchLatestPosts = async (req, res) => {
    try {
        const posts = await PostModel.find({ tag: "Recruitment/Job Search"}).sort({ _id: -1}).limit(6)
        res.status(200).json(posts)
    } catch (error) {
        res.status(404).json({ message: error.message})
    }
}