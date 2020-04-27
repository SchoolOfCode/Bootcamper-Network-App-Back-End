const express = require("express");

const {
  getBootcamperByName,
  getBootcamperByRegion,
  getBootcamperByJobTitle,
  createBootcamper,
  updateBootcamper,
  deleteBootcamper,
} = require("../models/bootcampers.js");

const router = express.Router();

router.get("/bootcampers", async (req, res) => {
  const { name, region, jobtitle } = req.query;
try {
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
  }} catch(error) {
    console.log(error)
    res.json(error)
  }
});

router.post("/bootcampers", async function (req, res) {
  const { body } = req;
  const data = await createBootcamper(body);
  console.log(data);
  res.json({
    success: true,
    message: "new bootcamper created",
    payload: data,
  });
});

router.patch("/bootcampers/:id", async function (req, res) {
  const { body } = req;
  const { id } = req.params;
  const data = await updateBootcamper(body, id);
  console.log(data);
  res.json({
    success: true,
    message: `bootcamper ${id} updated`,
    payload: data,
  });
});

router.delete("/bootcampers/:id", async function (req, res) {
  const { id } = req.params;
  const data = await deleteBootcamper(id);
  console.log(`Log: You have deleted a bootcamper. Data: ${data}`);
  res.send(`You have deleted a bootcamper`);
});

module.exports = router;
