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
  console.log(`GET: getcompanyname Results:${data.rows} `);
  return data.rows;
}

module.exports = {
  getCompanyByName,
};
