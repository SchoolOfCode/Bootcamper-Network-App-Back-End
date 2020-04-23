const express = require("express");

const { getBootcamperByName } = require("../models/bootcampers.js");

const router = express.Router();

router.get("/bootcampers", async (req, res) => {
  const { name } = req.query;
  const bootcampersearch = await getBootcamperByName(name);
  res.json({
    success: true,
    message: "bootcamper searched",
    payload: bootcampersearch,
  });
  return;
});

module.exports = router;
