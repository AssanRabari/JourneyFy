import mongoose from "mongoose";
const { Schema } = mongoose;

const savedPostSchema = new Schema(
    {
        userId: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        },
        postId: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'Post'
        },
    },
    {
        timestamps: true,
    }
);

savedPostSchema.index({ userId: 1, postId: 1 }, { unique: true });

export default mongoose.model("SavedPost", savedPostSchema);