const { query } = require("../index");

async function dropDashboardMessageTable() {
  try {
    const res = await query(`DROP TABLE dashboardmessage`);
    console.log(`The table has been dropped${res.command}`);
  } catch (err) {
    console.log(err);
  }
}

dropDashboardMessageTable();
