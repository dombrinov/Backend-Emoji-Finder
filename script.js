import express from "express";
import cors from "cors";
import { data } from "./data/data.js";

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(express.static("public"));
app.use(cors("*"));

app.get("/api/get", (req, res) => {
  let newArr = data.filter(
    (item) =>
      item.title.toLowerCase().includes(req.query.query) ||
      item.keywords.toLowerCase().includes(req.query.query)
  );
// первый квери это все ключиб но поскольку первый ключ я назвал квери то после второй точки нужно указать квери
  res.status(200).json(newArr);
});

app.get("/api/get/full", (req, res) => {
  res.status(200).json(data);
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
