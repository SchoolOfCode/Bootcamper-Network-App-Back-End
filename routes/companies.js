const express = require("express");

const {
  getCompanyByName,
  getAllCompanies,
  getCompanyById,
  createCompany,
  updateCompany,
  deleteCompany,
} = require("../models/companies.js");

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
  const companysearch = await getAllCompanies();
  res.json({
    success: true,
    message: "all companies",
    payload: companysearch,
  });
  return;
});

router.get("/companies/:companyid", async (req, res) => {
  const { companyid } = req.params;
  const companysearch = await getCompanyById(companyid);
  res.json({
    success: true,
    message: "company searched",
    payload: companysearch,
  });
  return;
});

router.post("/companies", async function (req, res) {
  const { body } = req;
  const data = await createCompany(body);
  console.log(data);
  res.json({
    success: true,
    message: "new company created",
    payload: data,
  });
});

router.patch("/companies/:id", async function (req, res) {
  const { body } = req;
  const { id } = req.params;
  const data = await updateCompany(body, id);
  console.log(data);
  res.json({
    success: true,
    message: `company ${id} updated`,
    payload: data,
  });
});

router.delete("/companies/:id", async function (req, res) {
  const { id } = req.params;
  const data = await deleteCompany(id);
  console.log(`Log: You have deleted a company. Data:`, data);
  res.send(`You have deleted a company`);
});

module.exports = router;
