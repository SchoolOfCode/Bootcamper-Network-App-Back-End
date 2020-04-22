const { query } = require("../index");

async function dropBootcamperTable() {
  try {
    const res = await query(`DROP TABLE bootcampers`);
    console.log(`The table has been dropped${res.command}`);
  } catch (err) {
    console.log(err);
  }
}

dropBootcamperTable();
