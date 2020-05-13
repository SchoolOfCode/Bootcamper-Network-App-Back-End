const express = require("express");
const bootcampRouter = require("./routes/bootcampers.js");
const companyRouter = require("./routes/companies");
const eventRouter = require("./routes/events");
const dashboardRouter = require("./routes/dashboard");

const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5000;
var http = require("http").createServer(app);
const { query } = require("./db/index");
var io = require("socket.io")(http);

app.use(cors());
app.use((req, res, next) => {
  console.log(`${req.method} request received to ${req.url}"`);
  next();
});
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
  // console.log(`POST: post message Results:`, data.rows);
  return data.rows;
}

async function getLatestMessageFromDb() {
  const data = await query(
    `SELECT messages.bootcamper_id, first_name,
    surname,
    photo_url,
    message,
    sent
    FROM messages LEFT JOIN bootcampers ON messages.bootcamper_id = bootcampers.bootcamper_id ORDER BY sent DESC LIMIT 1`
  );
  // console.log(`Get: latest message query Results:`, data.rows);
  return data.rows[0];
}

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
  socket.on("chatMessage", async (myMessage) => {
    await sendMessageToDb(myMessage);
    const latestmessage = await getLatestMessageFromDb();
    // console.log("latestmessage from db:", latestmessage);
    io.emit("chatMessage", latestmessage);
  });
});

app.use(bootcampRouter);
app.use(companyRouter);
app.use(eventRouter);
app.use(dashboardRouter);

http.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
