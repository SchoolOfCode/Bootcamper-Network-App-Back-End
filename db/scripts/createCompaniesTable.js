const { query } = require("../index");

async function createCompaniesTable() {
  const res = await query(
    `CREATE TABLE IF NOT EXISTS companies (
      company_id SERIAL PRIMARY KEY, company_name TEXT, 
      description TEXT, logo TEXT, address TEXT, postcode TEXT, 
      website TEXT, twitter TEXT, linkedin TEXT)`
  );

  console.log(`Log: create companies table script ${res}`);
}

createCompaniesTable();
