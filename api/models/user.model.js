import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      required: false,
    },
    posts: [{
      type: Schema.Types.ObjectId,
      ref: 'Post'
    }],
    savedPosts: [{
      type: Schema.Types.ObjectId,
      ref: 'SavedPost'
    }],
    createdAt: {
      type: Date
      ,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", userSchema);
