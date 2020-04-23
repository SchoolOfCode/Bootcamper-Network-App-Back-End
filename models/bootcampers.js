const { query } = require("../db/index");

async function getBootcamperByName(name) {
  const data = await query(
    `SELECT first_name,
    surname,
    profile,
    job_title,
    bootcampers.company_id,
    company_name,
    salary,
    start_date,
    previous_roles,
    cohort_num,
    region,
    job_satisfaction,
    new_job,
    twitter,
    github,
    portfolio,
    linkedin FROM bootcampers INNER JOIN companies ON companies.company_id = bootcampers.company_id WHERE first_name OR surname ILIKE '%' || $1 || '%'`,
    [name]
  );
  console.log(`GET: getbootcampername Results:${data} `);
  return data.rows;
}

async function getBootcamperAndCompany(name) {
  const data = await query(
    `SELECT * FROM bootcampers WHERE first_name ILIKE '%' JOIN company_name`
  );
}

// get bootcamper info from bootcamper table
// but get the company name for that bootcamper from the company table
// join company on company ID as that's the relational field?
module.exports = {
  getBootcamperByName,
};
