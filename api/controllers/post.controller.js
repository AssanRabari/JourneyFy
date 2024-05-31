import Post from "../models/post.model.js"

export const getPosts = async (req, res) => {

    try {
        const posts = await Post.find();
        res.status(200).json(posts)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Failed to get posts!" })
    }
}

export const getPost = async (req, res) => {
    const postId = req.params.id;
    try {
        const singlePost = await Post.findById({ _id: postId });
        res.status(200).json(singlePost)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Failed to get post!" })
    }
}

export const createPost = async (req, res) => {
    console.log("create post")

    // const postId = req.params.id;
    try {
        // const singlePost = await Post.findById({ _id: postId });
        // res.status(200).json(singlePost)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Failed to create post!" })
    }
}

export const updatePost = async (req, res) => {
    console.log("update post")

    // const postId = req.params.id;
    // const tokenUserId = req.userId

    // if (userId !== tokenUserId) {
    //     res.status(403).json({ message: "Not Authorized" })
    // }
    try {

        // const updatedPost = await Post.findByIdAndUpdate(postId, data);
        // res.send(updatedPost);
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Failed to update post!" })
    }
}

export const deletePost = async (req, res) => {
    console.log("delete post")
    // const postId = req.params.id;
    // const tokenUserId = req.userId

    // if (postId !== tokenUserId) {
    //     res.status(403).json({ message: "Not Authorized" })
    // }

    try {
        // await Post.findByIdAndDelete(postId);
        // res.status(200).json({ message: "Post deleted successfully!" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Failed to delete post!" })
    }
}