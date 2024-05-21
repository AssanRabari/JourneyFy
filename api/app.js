import express from "express";
import cookieParser from "cookie-parser";
import authRoute from "./routes/auth.route.js";
import postRoute from "./routes/post.route.js";
import mongoose from "mongoose";
import dbConnect from "./lib/dbConnect.js";
const app = express();

mongoose.set("strictQuery", true);

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoute);
app.use("/api/post", postRoute);

app.listen(8800, () => {
  dbConnect();
  console.log("Server is runing");
});
