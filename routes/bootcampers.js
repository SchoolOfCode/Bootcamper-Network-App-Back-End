const express = require("express");

const {
  getBootcamperByName,
  getBootcamperByRegion,
  getBootcamperByJobTitle,
} = require("../models/bootcampers.js");

const router = express.Router();

router.get("/bootcampers", async (req, res) => {
  const { name, region, jobtitle } = req.query;
  if (name) {
    const bootcampersearch = await getBootcamperByName(name);
    res.json({
      success: true,
      message: "bootcamper searched",
      payload: bootcampersearch,
    });
    return;
  }
  if (region) {
    const bootcampersearch = await getBootcamperByRegion(region);
    res.json({
      success: true,
      message: "bootcamper region searched",
      payload: bootcampersearch,
    });
    return;
  }
  if (jobtitle) {
    const bootcampersearch = await getBootcamperByJobTitle(jobtitle);
    res.json({
      success: true,
      message: "bootcamper job title searched",
      payload: bootcampersearch,
    });
    return;
  }
});

module.exports = router;
