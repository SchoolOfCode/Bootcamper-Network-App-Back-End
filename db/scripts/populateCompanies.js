const { query } = require("../index");

const companies = [
  {
    company_id: 1,
    company_name: "Talis",
    description:
      "Talis is a software company whose mission is to apply technology and data to help transform education.",
    logo:
      "https://media-exp1.licdn.com/dms/image/C4E0BAQFYo6pg_o8tKg/company-logo_200_200/0?e=1595462400&v=beta&t=PEjSuAwiEgn_zTYrO35H4n5mcMFD3h_cOt-Dfp4DTZQ",
    address: "48 Frederick St, Birmingham",
    postcode: "B1 3HN",
    website: "https://careers.talis.com/",
    twitter: "https://twitter.com/talis",
    linkedin: "https://www.linkedin.com/company/talis-group-ltd-/",
  },
  {
    company_id: 2,
    company_name: "Santander",
    description: "Leading financial services provider",
    logo:
      "https://media-exp1.licdn.com/dms/image/C560BAQEXYx-GWHNC9Q/company-logo_200_200/0?e=1597276800&v=beta&t=mXQuiKQvcr6Zbb6FDaxxD3uSz08X47WonwyuVo3QZ8M",
    address: "Innovation Birmingham, Holt Street, Birmingham, West Midlands",
    postcode: "B7 4BP",
    website: "https://www.santandertechnology.co.uk/",
    twitter: "https://twitter.com/santanderuk",
    linkedin: "https://www.linkedin.com/company/santander-uk/about/",
  },
  {
    company_id: 3,
    company_name: "Purple Bricks",
    description:
      "Purplebricks is the world’s fastest growing estate agent and offers customer a fairer, more transparent and convenient way to buy, sell, or let.",
    logo:
      "https://media-exp1.licdn.com/dms/image/C4D0BAQEnUY6HfpONeA/company-logo_200_200/0?e=1595462400&v=beta&t=4HttFU9z3wPZGin7V9W7JFptsWoRYBW3wjD1ogQASt4",
    address: "Cranmore Place, Cranmore Drive, Shirley, Solihull",
    postcode: "B90 4RZ",
    website: "https://purplebrickscareers.co.uk/",
    twitter: "https://twitter.com/purplebricksuk",
    linkedin: "https://www.linkedin.com/company/purplebricks-com/",
  },
  {
    company_id: 4,
    company_name: "The Economist",
    description:
      "The Economist is one of the most widely recognised and well-read current affairs publications, with a growing global circulation of around 1.5m readers and a reputation for incisive analysis and opinion on every aspect of world events.",
    logo:
      "https://media-exp1.licdn.com/dms/image/C560BAQGDT-4-61kkkg/company-logo_200_200/0?e=1595462400&v=beta&t=vr45N8X2daRolVZnW6JHpkzLabEfHz6B4ypHuaDkiQc",
    address: "60 Church Street, Birmingham",
    postcode: "B3 2DJ",
    website: "https://economistgroupcareers.com/",
    twitter: "https://twitter.com/economistcareer",
    linkedin: "https://www.linkedin.com/company/the-economist/",
  },
  {
    company_id: 5,
    company_name: "The School of Code",
    description: "A free, full stack web development bootcamp for everyone!",
    logo:
      "https://media-exp1.licdn.com/dms/image/C4E0BAQFJE7NbcQ156w/company-logo_200_200/0?e=1596067200&v=beta&t=49ZTCXmjMNF5frCkmT7d1dlPceqUR-oiJ5eYJiHS0lw",
    address: "Custard Factory, Gibb St, Birmingham",
    postcode: "B9 4AA",
    website: "https://www.schoolofcode.com/",
    twitter: "https://twitter.com/theschoolofcode",
    linkedin: "https://www.linkedin.com/school/school-of-code/",
  },
  {
    company_id: 6,
    company_name: "Bravissimo",
    description:
      "Bravissimo is a company that provides a wide choice of lingerie and swimwear in D-L cup, as well as clothing designed especially for big boobed women so that they can celebrate their curves and feel good about themselves! ",
    logo:
      "https://media-exp1.licdn.com/dms/image/C4D0BAQEMgw3DNQpCMA/company-logo_200_200/0?e=1597276800&v=beta&t=W59DGq0nKdNUgpwlPps3HBp6dmQ77SiXOckVkOQAp7Y",
    address: "Imperial Court, Holly Walk, Leamington Spa Warwickshire",
    postcode: "CV32 4YB",
    website: "https://www.bravissimo.com/work-for-us/",
    twitter: "https://twitter.com/lovebravissimo",
    linkedin: "https://www.linkedin.com/company/bravissimo/",
  },
  {
    company_id: 7,
    company_name: "Voxpopme",
    description:
      "Voxpopme is the world’s #1 video insight platform with an impressive global client list of brands and agencies. We help businesses and brands see the people behind the data to drive real customer-centric decision-making. ",
    logo:
      "https://media-exp1.licdn.com/dms/image/C4E0BAQGjUM_CBHpSRA/company-logo_200_200/0?e=1597276800&v=beta&t=ttLb6-QM-MG860_YMPJyQWORunGV30CUK3HiAtRDYMI",
    address: "Somerset House, 4th Floor, 37 Temple Street, Birmingham, UK",
    postcode: "B2 5DP",
    website: "https://site.voxpopme.com/en/",
    twitter: "https://twitter.com/voxpopme",
    linkedin: "https://www.linkedin.com/company/voxpopme/about/",
  },
  {
    company_id: 8,
    company_name: "Wealth Wizards",
    description:
      "We're here to make financial advice affordable and accessible to all. ",
    logo:
      "https://media-exp1.licdn.com/dms/image/C4D0BAQF-ivQX1ed_9g/company-logo_200_200/0?e=1597276800&v=beta&t=0K4kOBv5eVCdwJF0RXcBB4BBfKcjWm-u55xYCXSU0Uw",
    address: "Wizards House 8 Athena Court Tachbrook Park Leamington Spa",
    postcode: "CV34 6RT",
    website: "https://www.wealthwizards.com/",
    twitter: "https://twitter.com/wealthwizards",
    linkedin: "https://www.linkedin.com/company/wealth-wizards-limited/",
  },
  {
    company_id: 9,
    company_name: "Amigo Technology",
    description:
      "Amigo is a fast, low-risk and cost-efficient way for enterprises to deliver new digital experiences on top of legacy technology.",
    logo:
      "https://media-exp1.licdn.com/dms/image/C4D0BAQGLM0RmBa8pVw/company-logo_200_200/0?e=1597276800&v=beta&t=vrnuXnyNmVvB-E9ZA4lCAgnX3pxZOdxBxyKKL-QSWhM",
    address: "156 Great Charles Street Queensway Birmingham",
    postcode: "B3 3HN",
    website: "https://amigotechnology.com/",
    twitter: "https://twitter.com/AmigoTechnology",
    linkedin: "https://www.linkedin.com/company/amigotechnology/",
  },
  {
    company_id: 10,
    company_name: "DRPG",
    description:
      "We are a fully integrated, global creative communications group",
    logo:
      "https://media-exp1.licdn.com/dms/image/C4E0BAQFx8ptUOsNFjA/company-logo_200_200/0?e=1597276800&v=beta&t=91_DPA676vIFeMOhP0-5LNPaMlOA-iGWz2JrwmJhsyc",
    address: "Studio 212 Ikon Estate Droitwich Road Hartlebury",
    postcode: "DY10 4EU",
    website: "https://www.drpgroup.com/",
    twitter: "https://twitter.com/drpgroup",
    linkedin: "https://www.linkedin.com/company/drpgroup/",
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
