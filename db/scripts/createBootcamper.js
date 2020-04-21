const { query } = require("../index");

async function createContractsTable() {
  const res = await query(
    `CREATE TABLE IF NOT EXISTS bootcampers (bootcamper_id SERIAL PRIMARY KEY, first_name TEXT, surname TEXT, profile TEXT, job_title TEXT, company_id INTEGER REFERENCES companies(company_id), salary TEXT, start_date DATE,  )`
  );

  console.log(res);
}

createContractsTable();
