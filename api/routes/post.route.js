import express from "express";

const router = express.Router();

router.get("/test", (req, res) => {
  res.send("Router working");
});

router.post("/test", (req, res) => {
  res.send("Router working");
});

router.put("/test", (req, res) => {
  res.send("Router working");
});

router.delete("/test", (req, res) => {
  res.send("Router working");
});

export default router;
