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

async function createBootcamper({
  first_name,
  surname,
  profile,
  job_title,
  company_id,
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
  linkedin,
}) {
  const res = await query(
    `INSERT INTO bootcampers(first_name,
      surname,
      profile,
      job_title,
      company_id,
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
      linkedin) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16) RETURNING first_name`,
    [
      first_name,
      surname,
      profile,
      job_title,
      company_id,
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
      linkedin,
    ]
  );
  console.log(`Log: createBootcamper result ${res}`);
  return `This has created a new bootcamper profile for name -> need to change this: ${res}`;
}

async function updateBootcamper(body, id) {
  const {
    first_name,
    surname,
    profile,
    job_title,
    company_id,
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
    linkedin,
  } = body;
  const res = await query(
    `UPDATE companies SET
    first_name = COALESCE($1, first_name),
    surname = COALESCE($2, surname),
    profile = COALESCE($3, profile),
    job_title = COALESCE($4, job_title),
    company_id = COALESCE($5, company_id),
    salary = COALESCE($6, salary),
    start_date = COALESCE($7, start_date),
    previous_roles = COALESCE($8, previous_roles),
    cohort_num = COALESCE($9, cohort_num),
    region = COALESCE($10, region),
    job_satisfaction = COALESCE($11, job_satisfaction),
    new_job = COALESCE($12, new_job),
    twitter = COALESCE($13, twitter),
    github = COALESCE($14, github),
    portfolio = COALESCE($15, portfolio),
    linkedin = COALESCE($16, linkedin) WHERE bootcamper_id = $17 RETURNING bootcamper_name`,
    [
      first_name,
      surname,
      profile,
      job_title,
      company_id,
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
      linkedin,
      id,
    ]
  );
  console.log(`log updateBootcamper complete`);
  return res.rows[0];
}

async function deleteBootcamper(id) {
  const res = await query(
    `DELETE FROM bootcampers WHERE bootcamper_id=$1 RETURNING first_name`,
    [id]
  );
  console.log(`log: bootcamper has been deleted`);
  return res.rows;
}

module.exports = {
  getBootcamperByName,
  getBootcamperByRegion,
  getBootcamperByJobTitle,
  createBootcamper,
  updateBootcamper,
  deleteBootcamper,
};
