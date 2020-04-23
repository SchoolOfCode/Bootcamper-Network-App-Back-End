const { query } = require("../db/index");

async function getBootcamperByName(name) {
  const data = await query(
    `SELECT first_name,
    surname,
    profile,
    job_title,
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
  console.log(`GET: getbootcampername Results:${data.rows} `);
  return data.rows;
}

async function getBootcamperByRegion(region) {
  const data = await query(
    `SELECT first_name,
    surname,
    job_title,
    company_name,
    region FROM companies INNER JOIN bootcampers ON bootcampers.company_id = companies.company_id WHERE region ILIKE '%' || $1 || '%'`,
    [region]
  );
  console.log(`GET: getBootcamperByRegion Results:${data.rows} `);
  return data.rows;
}

async function getBootcamperByJobTitle(jobtitle) {
  const data = await query(
    `SELECT first_name,
    surname,
    job_title,
    company_name FROM companies INNER JOIN bootcampers ON bootcampers.company_id = companies.company_id WHERE job_title ILIKE '%' || $1 || '%'`,
    [jobtitle]
  );
  console.log(`GET: getBootcamperByJobTitle Results:${data.rows} `);
  return data.rows;
}

// name, profile pic, company, role

// get bootcamper info from bootcamper table
// but get the company name for that bootcamper from the company table
// join company on company ID as that's the relational field?
module.exports = {
  getBootcamperByName,
  getBootcamperByRegion,
  getBootcamperByJobTitle,
};
