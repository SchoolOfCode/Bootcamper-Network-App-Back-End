const { query } = require("../db/index");

async function getCompanyByName(companyname) {
  const data = await query(
    `SELECT company_name, 
    description, 
    address, 
    postcode, 
    website, 
    twitter, 
    linkedin FROM companies WHERE company_name ILIKE '%' || $1 || '%'`,
    [companyname]
  );
  console.log(`GET: Get company name Results:${data.rows} `);
  return data.rows;
}

async function getCompanyById(id) {
  const data = await query(
    `SELECT company_name, 
    description, 
    address, 
    postcode, 
    website, 
    twitter, 
    linkedin FROM companies WHERE company_id ILIKE '%' || $1 || '%'`,
    [id]
  );
  console.log(`GET: Get company name by ID Results:${data.rows} `);
  return data.rows;
}

async function createCompany({
  company_name,
  description,
  logo,
  address,
  postcode,
  website,
  twitter,
  linkedin,
}) {
  const res = await query(
    `INSERT INTO companies(company_name,
      description,
      logo,
      address,
      postcode,
      website,
      twitter,
      linkedin) values ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING company_name`,
    [
      company_name,
      description,
      logo,
      address,
      postcode,
      website,
      twitter,
      linkedin,
    ]
  );
  console.log(`Log: createCompany result ${res}`);
  return `This has created a new company profile for name -> need to change this: ${res}`;
}

async function updateCompany(body, id) {
  const {
    company_name,
    description,
    logo,
    address,
    postcode,
    website,
    twitter,
    linkedin,
  } = body;
  const res = await query(
    `UPDATE companies SET
  company_name = COALESCE($1, company_name),
  description = COALESCE($2, description),
  logo = COALESCE($3, logo),
  address = COALESCE($4, address),
  postcode = COALESCE($5, postcode),
  website = COALESCE($6, website),
  twitter = COALESCE($7, twitter),
  linkedin = COALESCE($8, linkedin)
  WHERE company_id = $9 
  RETURNING company_name`,
    [
      company_name,
      description,
      logo,
      address,
      postcode,
      website,
      twitter,
      linkedin,
      id,
    ]
  );
  console.log(`log updateCompany complete`);
  return res.rows[0];
}

async function deleteCompany(id) {
  const res = await query(
    `DELETE FROM companies WHERE company_id=$1 RETURNING company_name`,
    [id]
  );
  console.log(`log: company ${id} has been deleted`);
  return res.rows;
}

module.exports = {
  getCompanyByName,
  getCompanyById,
  createCompany,
  updateCompany,
  deleteCompany,
};
