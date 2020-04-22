const { query } = require("../index");

async function dropCompaniesTable() {
  try {
    const res = await query(`DROP TABLE companies`);
    console.log(`The table has been dropped${res.command}`);
  } catch (err) {
    console.log(err);
  }
}

dropCompaniesTable();
