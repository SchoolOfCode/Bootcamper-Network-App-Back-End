const { query } = require("../db/index");

async function getLatestMessage() {
  const data = await query(
    `SELECT message FROM dashboardmessage ORDER BY message_id DESC LIMIT 1;`
  );
  console.log(`GET: Get all companies Results:`, data.rows);
  return data.rows;
}

async function createDashboardMessage({ message }) {
  const res = await query(
    `INSERT INTO dashboardmessage(message) values ($1) RETURNING message`,
    [message]
  );
  console.log(`Log: createDashboardMessage result`, res);
  return `You have posted a message to dashboard message ${res}`;
}

module.exports = { getLatestMessage, createDashboardMessage };
