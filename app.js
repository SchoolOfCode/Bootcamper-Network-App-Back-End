const express = require("express");
const bootcampRouter = require("./routes/bootcampers.js");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5000;

app.use((req, res, next) => {
  console.log(`${req.method} request received to ${req.url}"`);
  next();
});
app.use(cors());
app.use(express.json()); //to parse post requests

app.get("/servertest", (req, res) => {
  res.send("Hello I'm working!");
});

app.use(bootcampRouter);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
