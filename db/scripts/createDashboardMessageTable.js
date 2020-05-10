const { query } = require("../index");

async function createDashboardMessageTable() {
  const res = await query(
    `CREATE TABLE IF NOT EXISTS dashboardmessage (message_id SERIAL PRIMARY KEY, message TEXT)`
  );

  console.log(`Log: create dashboard message table script`, res);
}

createDashboardMessageTable();
