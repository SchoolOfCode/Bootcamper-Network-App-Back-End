const { query } = require("../index");

async function createContractsTable() {
  const res = await query(
    `CREATE TABLE IF NOT EXISTS bootcampers (bootcamper_id SERIAL PRIMARY KEY, first_name TEXT, surname TEXT, profile TEXT, job_title TEXT, company_id INTEGER REFERENCES companies(company_id), salary TEXT, start_date DATE, previous_roles TEXT, cohort_num INTEGER, region TEXT, job_satisfaction INTEGER, new_job TEXT, twitter TEXT, github TEXT, portfolio TEXT, linkedin TEXT)`
  );

  console.log(`Log: create table script ${res}`);
}

createContractsTable();
