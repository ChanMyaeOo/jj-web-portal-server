import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    name: String,
    creator: String,
    selectedFile: String,
    tag: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var PostModel = mongoose.model('PostModel', postSchema);

export default PostModel;