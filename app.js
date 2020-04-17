const express = require("express");
const app = express();
const PORT = 5000;

app.get("/hellojodie", (req, res) => {
  res.send("Hiiiiyaaaaa bab");
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
