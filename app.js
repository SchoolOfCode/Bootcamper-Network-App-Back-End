const express = require("express");
const bootcampRouter = require("./routes/bootcampers.js");
const companyRouter = require("./routes/companies");
const eventRouter = require("./routes/events");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5000;

app.use((req, res, next) => {
  console.log(`${req.method} request received to ${req.url}"`);
  next();
});
app.use(cors());
app.use(express.json()); //to parse post requests

app.get("/health", (req, res) => {
  res.status(200).send("Hello I'm working!");
});

app.use(bootcampRouter);
app.use(companyRouter);
app.use(eventRouter);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
