const dotenv = require("dotenv");
const express = require("express");

dotenv.config();

const PORT = process.env.PORT || 8000;

const app = express();

app.get("/", (_req, res) => {
  res.send(`hello, world! on port ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`🚀 ~ app.listen ~ running on http://localhost:${PORT}`);
});
