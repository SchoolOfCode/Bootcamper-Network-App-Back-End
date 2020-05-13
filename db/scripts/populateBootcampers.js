const { query } = require("../index");

const bootcampers = [
  {
    uid: "1t42I7AR4vfImOXCk4VFuUhv6B71",
    email: "benben@gmail.com",
    photo_url:
      "https://cdn2.vectorstock.com/i/1000x1000/24/31/with-guitar-pleurotus-erynggi-mushroom-mascot-vector-21182431.jpg",
    first_name: "Ben",
    surname: "Lee",
    aboutme: "I work for School of Code as a teacher and I love old jazz.",
    job_title: "Teacher",
    company_id: 5,
    salary: "£35,000",
    start_date: "2019-10-05",
    previous_roles: [
      { jobTitle: "Full Stack Developer", Company: "Santander" },
      { jobTitle: "Full Stack Developer", Company: "Sainsburys" },
    ],
    cohort_num: 2,
    region: "Birmingham",
    job_satisfaction: 5,
    new_job: "no",
    twitter: "https://twitter.com/mrbenbot",
    github: "https://github.com/ben",
    portfolio: "https://www.benben.co.uk",
    linkedin: "https://www.linkedin.com/in/benlee/",
  },
];

async function populateBootcampers() {
  for (let i = 0; i < bootcampers.length; i++) {
    const {
      uid,
      email,
      photo_url,
      first_name,
      surname,
      aboutme,
      job_title,
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
    } = bootcampers[i];

    const res = await query(
      `INSERT INTO bootcampers (uid, email, photo_url, first_name, surname,
            aboutme,
            job_title,
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
            linkedin) values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18)`,
      [
        uid,
        email,
        photo_url,
        first_name,
        surname,
        aboutme,
        job_title,
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
    console.log(`Log:Populated table with ${first_name} ${surname}`);
  }
}

populateBootcampers();
