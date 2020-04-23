const { query } = require("../index");

const companies = [
  {
    company_id: 1,
    company_name: "Talis",
    description: "Supplies education software and solutions",
    logo:
      "https://media-exp1.licdn.com/dms/image/C4E0BAQFYo6pg_o8tKg/company-logo_200_200/0?e=1595462400&v=beta&t=PEjSuAwiEgn_zTYrO35H4n5mcMFD3h_cOt-Dfp4DTZQ",
    address: "Jewellery Quarter, Birmingham",
    postcode: "B72 6PM",
    website: "https://careers.talis.com/",
    twitter: "https://twitter.com/talis",
    linkedin: "https://www.linkedin.com/company/talis-group-ltd-/",
  },
  {
    company_id: 2,
    company_name: "Mcdonalds HQ",
    description: "Giving the nation tasty burgers",
    logo:
      "https://expandedramblings.com/wp-content/uploads/2016/03/McDonalds-Facts-and-Statistics-1200x1200.jpg",
    address: "Camden Market, London",
    postcode: "W1 BAA",
    website: "https://people.mcdonalds.co.uk/",
    twitter: "https://twitter.com/McDonalds",
    linkedin: "https://www.linkedin.com/company/mcdonald's-corporation/",
  },
  {
    company_id: 3,
    company_name: "Purple Bricks",
    description: "Sorting out top gaffs",
    logo:
      "https://media-exp1.licdn.com/dms/image/C4D0BAQEnUY6HfpONeA/company-logo_200_200/0?e=1595462400&v=beta&t=4HttFU9z3wPZGin7V9W7JFptsWoRYBW3wjD1ogQASt4",
    address: "Solihull, Birmingham",
    postcode: "B12 3SY",
    website: "https://purplebrickscareers.co.uk/",
    twitter: "https://twitter.com/purplebricksuk",
    linkedin: "https://www.linkedin.com/company/purplebricks-com/",
  },
  {
    company_name: "The Economist",
    description: "Making expensive magazines",
    logo:
      "https://media-exp1.licdn.com/dms/image/C560BAQGDT-4-61kkkg/company-logo_200_200/0?e=1595462400&v=beta&t=vr45N8X2daRolVZnW6JHpkzLabEfHz6B4ypHuaDkiQc",
    address: "60 Church Street, Birmingham",
    postcode: "B3 2DJ",
    website: "https://economistgroupcareers.com/",
    twitter: "https://twitter.com/economistcareer",
    linkedin: "https://www.linkedin.com/company/the-economist/",
  },
];

async function populateCompanies() {
  for (let i = 0; i < companies.length; i++) {
    const {
      company_name,
      description,
      logo,
      address,
      postcode,
      website,
      twitter,
      linkedin,
    } = companies[i];

    const res = await query(
      `INSERT INTO companies (company_name,
        description,
        logo,
        address,
        postcode,
        website,
        twitter,
        linkedin) values ($1, $2, $3, $4, $5, $6, $7, $8)`,
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
    console.log(`log:populated table with ${company_name}`);
  }
}

populateCompanies();
