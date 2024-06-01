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
    const body = req.body;
    const tokenUserId = req.userId;
    console.log("body--->", body)
    console.log("body--->", tokenUserId)

    try {
        const newPost = await new Post({
            data: {
                ...body,
                user: tokenUserId,
            }
        });
        res.status(200).json(newPost)
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
    const postId = req.params.id;
    const tokenUserId = req.userId

    console.log("delete post", postId, tokenUserId)
    try {
        const post = await Post.findById(postId);
        console.log("delete post--", post)

        if (post?._id !== tokenUserId) {
            return res.status(403).json({ message: "Not Authorized" })
        }
        await Post.findByIdAndDelete(postId);
        res.status(200).json({ message: "PostF deleted successfully!" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Failed to delete post!" })
    }
}