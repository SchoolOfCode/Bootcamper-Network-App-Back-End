const express = require("express");
const bootcampRouter = require("./routes/bootcampers.js");
const companyRouter = require("./routes/companies");
const eventRouter = require("./routes/events");
const dashboardRouter = require("./routes/dashboard");

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

async function sendMessageToDb({ bootcamper_id, message }) {
  const data = await query(
    `INSERT INTO messages(bootcamper_id, message)
       values ($1, $2) RETURNING bootcamper_id`,
    [bootcamper_id, message]
  );
  console.log(`POST: post message Results:`, data.rows);
  return data.rows;
}

async function getMessagesFromDb({ bootcamper_id, message }) {
  const data = await query(
    `SELECT messages.bootcamper_id, first_name,
    surname,
    photo_url,
    message,
    sent
    FROM bootcampers LEFT JOIN messages ON bootcampers.bootcamper_id = messages.bootcamper_id`
  );
  console.log(`Get: allmessages Results:`, data.rows);
  return data.rows;
}

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
  socket.on("chatMessage", (myMessage) => {
    sendMessageToDb(myMessage);
    console.log("message received from front end:", myMessage);
    io.emit("chatMessage", myMessage); //helen up to here - how to send all the messages back, maybe send data from the get instead of 'mymessage'
  });
});

app.use(bootcampRouter);
app.use(companyRouter);
app.use(eventRouter);
app.use(dashboardRouter);

http.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
