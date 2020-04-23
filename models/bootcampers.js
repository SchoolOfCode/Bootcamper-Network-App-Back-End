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
    bootcampers.twitter,
    github,
    portfolio,
    bootcampers.linkedin FROM companies INNER JOIN bootcampers ON bootcampers.company_id = companies.company_id WHERE first_name ILIKE '%' || $1 || '%'`,
    [name]
  );
  console.log(`GET: getbootcampername Results:${data} `);
  return data;
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
