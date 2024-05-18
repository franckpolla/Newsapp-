import mongoose from "mongoose";

const Schema = new mongoose.Schema(
  {
    Img: {
      type: String,
      required: true,
    },
    category: { type: String, required: true },
    Date: { type: Date, required: true },

    author: { type: String, required: true}, 
    title: {
      type: String,
      required: true,
    },
    brief: {
      type: String,
      default: null,
    },
    avatar: { type: String, default: null },
    top: { type: Boolean, default: false },
    trending: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const PostItem =mongoose.model("NewPost", Schema);
// model (PostItem) acts as a wrapper around the schema, giving you methods to perform CRUD (Create, Read, Update, Delete) operations on your data.

export default PostItem;
