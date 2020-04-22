const { query } = require("../db/index");

async function getBootcamperByName(name) {
  const data = await query(
    `SELECT * FROM bootcampers WHERE first_name OR surname ILIKE '%' || $1 || '%'`,
    [name]
  );
  console.log(`GET: getbootcampername Results:${data} `);
  return data.rows;
}

module.exports = {
  getBootcamperByName,
};
