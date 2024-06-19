import Post from "../models/post.model.js"
import PostDetails from "../models/postdetails.model.js";
import SavedPost from "../models/savedpost.model.js";

export const getPosts = async (req, res) => {
    const query = req.query;
    try {
        const filter = {
            city: query.city || undefined,
            type: query.type || undefined,
            property: query.property || undefined,
            bedroom: query.bedroom || undefined,
            price: {
                $gte: parseInt(query.minPrice) || 0,
                $lte: parseInt(query.maxPrice) || 1000000
            },
        };
        const posts = await Post.find(filter).populate('postDetails');
        res.status(200).json(posts)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Failed to get posts!" })
    }
}

export const getPost = async (req, res) => {
    const postId = req.params.id;
    try {
        const singlePost = await Post.findById({ _id: postId }).populate('postDetails').populate('user');
        let userId;
        const token = req.cookies.token;
        if (token) {
            jwt.verify(token, "", async (err, payload) => {
                if (!err) {
                    const savedPost = await SavedPost.findById({ _id: postId, user: payload.id })
                    res.status(200).json(singlePost)
                }
            })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Failed to get post!" })
    }
}

export const createPost = async (req, res) => {

    try {
        const newPostDetails = new PostDetails(req.body.postDetails);
        await newPostDetails.save();

        const newPost = new Post({
            ...req.body.postData,
            postDetails: newPostDetails._id
        });
        await newPost.save();

        res.status(200).json(newPost);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message || "Failed to create post!" });
    }
}

export const updatePost = async (req, res) => {

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

    try {
        const post = await Post.findById(postId);
        const userId = String(post?.user)

        if (userId !== tokenUserId) {
            return res.status(403).json({ message: "Not Authorized" })
        }
        await Post.findByIdAndDelete(postId);
        res.status(200).json({ message: "Post deleted successfully!" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Failed to delete post!" })
    }
}
export const savePost = async (req, res) => {
    const postId = req.body.postId;
    const userTokenId = req.userId;

    try {
        const existingSavedPost = await SavedPost.findOne({ userId: userTokenId, postId: postId });

        if (existingSavedPost) {
            await SavedPost.deleteOne({ _id: existingSavedPost._id });
            res.status(200).json({ message: "Post unsaved successfully!" });
        } else {
            const savedPost = new SavedPost({
                userId: userTokenId,
                postId: postId
            });
            await savedPost.save();
            res.status(200).json({ message: "Post saved successfully!" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message || "Failed to save/unsave post!" });
    }
};