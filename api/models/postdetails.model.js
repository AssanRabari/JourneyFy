import mongoose from "mongoose";
const { Schema } = mongoose;

const postDetailsSchema = new Schema(
  {
    desc: {
      type: String,
      required: true,
    },
    utilities: {
      type: String,
    },
    petPolicy: {
      type: String,
    },
    income: {
      type: String,
    },
    size: {
      type: Number,
    },
    school: {
      type: Number,
    },
    bus: {
      type: Number,
    },
    restaurant: {
      type: Number,
    },
    posts: [{
      type: Schema.Types.ObjectId,
      ref: 'Post'
    }],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("PostDetails", postDetailsSchema);
