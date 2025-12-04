import express from "express";
import sum from "./sum.js";

const app = express();
const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Listening on port : ${PORT}📍`);
});

app.get("/", async (req, res) => {
  res.json({ msg: "I am the root !" });
});

app.get("/sum/:a/:b", async (req, res) => {
  const { a, b } = req.params;

  res.json({
    sum: sum(parseInt(a), parseInt(b)),
  });
});
