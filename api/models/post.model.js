import mongoose from "mongoose";
const { Schema } = mongoose;

const postSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        img: {
            type: String,
            required: false,
        },
        address: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        bedroom: {
            type: Number,
            required: true,
        },
        bathroom: {
            type: Number,
            required: true,
        },
        latitude: {
            type: String,
            required: true,
        },
        longitude: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            enum: ['buy', 'rent'],
            default: 'buy'
        },
        property: {
            type: String,
            enum: ['apartment', 'house', 'condo', 'land'],
            default: 'apartment',
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        },
        postDetails: [{
            type: Schema.Types.ObjectId,
            ref: 'PostDetails'
        }],
        savedPosts: [{
            type: Schema.Types.ObjectId,
            ref: 'SavedPost'
        }],
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("Post", postSchema);
