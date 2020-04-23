const express = require("express");

const { getCompanyByName } = require("../models/companies.js");

const router = express.Router();

router.get("/companies", async (req, res) => {
  const { companyname } = req.query;
  if (companyname) {
    const companysearch = await getCompanyByName(companyname);
    res.json({
      success: true,
      message: "company searched",
      payload: companysearch,
    });
    return;
  }
});

//all of our get post etc stuff

module.exports = router;
