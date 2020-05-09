const express = require("express");
const bootcampRouter = require("./routes/bootcampers.js");
const companyRouter = require("./routes/companies");
const eventRouter = require("./routes/events");
/* const messageRouter = require("./routes/messages") */
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5000;
var http = require("http").createServer(app);
var io = require("socket.io")(http);

app.use((req, res, next) => {
  console.log(`${req.method} request received to ${req.url}"`);
  next();
});
app.use(cors());
app.use(express.json()); //to parse post requests

app.get("/health", (req, res) => {
  res.status(200).send("Hello I'm working!");
});

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
  socket.on("chatMessage", (myMessage) => {
    console.log("message received from front end:", myMessage);
    io.emit("chatMessage", myMessage);
  });
});

app.use(bootcampRouter);
app.use(companyRouter);
app.use(eventRouter);
/* app.use(messageRouter) */
http.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
