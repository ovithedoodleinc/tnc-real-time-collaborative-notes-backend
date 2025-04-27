const express = require("express");

const app = express();

app.get("/", (_req, res) => {
  res.send("hello, world!");
});

app.listen(5000, () => {
  console.log("🚀 ~ app.listen ~ running on http://localhost:5000");
});
