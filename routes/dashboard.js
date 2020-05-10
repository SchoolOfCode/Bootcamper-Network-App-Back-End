const express = require("express");
const router = express.Router();
const {
  getLatestMessage,
  createDashboardMessage,
} = require("../models/dashboard.js");

router.get("/dashboard", async (req, res) => {
  const message = await getLatestMessage();
  res.json({
    success: true,
    message: "Latest dashboard message",
    payload: message,
  });
  return;
});

router.post("/dashboard", async function (req, res) {
  const { body } = req;
  const data = await createDashboardMessage(body);
  console.log(data);
  res.json({
    success: true,
    message: "new message posted",
    payload: data,
  });
});

module.exports = router;
