const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5000;

app.use((req, res, next) => {
  console.log(`${req.method} request received to ${req.url}"`);
  next();
});
app.use(cors());
app.use(express.json()); //to parse post requests

app.get("/hellojodie", (req, res) => {
  res.send("Hiiiiyaaaaa bab");
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
