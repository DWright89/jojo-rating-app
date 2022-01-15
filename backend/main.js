import express from "express";
import cors from "cors";

import { Character, Jojo } from "./jojObject.js";

const app = express();
app.use(cors());

const port = 8000;

const joseph = new Jojo();

joseph.name = "Old Man Joseph";
joseph.age = 75;
joseph.pack = 8;
joseph.luck = 10;
joseph.image =
  "https://cdn.inprnt.com/thumbs/08/15/0815462b607669bc401704b018caa9ef.jpg?response-cache-control=max-age=2628000";

const jotaro = new Jojo()
jotaro.name = "Jotaro Kujo"
jotaro.age = 18
jotaro.luck = 69
jotaro.pack = 12
jotaro.image = "https://www.giantbomb.com/a/uploads/scale_medium/36/361609/3277962-1915f590-db80-4a0e-8fd7-b7068401c7b8.png"

const jojoList = [joseph, jotaro];

app.get("/", (req, res) => {
  res.send("Hello World and hello!");
});

app.get("/jojos/list", (req, res) => {
  res.send(jojoList);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
