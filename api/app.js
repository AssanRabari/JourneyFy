import express from "express";

const app = express();

app.use("/api/test", (req, res) => {
  res.send("asdasdasdasdasdsa");
});
app.use("/api/auth/register", (req, res) => {
  res.send("asdasdasdasdasdsa");
});
app.use("/api/auth/login", (req, res) => {
  res.send("asdasdasdasdasdsa");
});
app.use("/api/auth/logout", (req, res) => {
  res.send("asdasdasdasdasdsa");
});
app.use("/api/posts/", (req, res) => {
  res.send("asdasdasdasdasdsa");
});
app.use("/api/posts/", (req, res) => {
  res.send("asdasdasdasdasdsa");
});
app.use("/api/posts/123", (req, res) => {
    res.send("asdasdasdasdasdsa");
  });
app.listen(8800, () => {
  console.log("Server is runing");
});
