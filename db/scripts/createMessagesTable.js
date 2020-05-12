const { query } = require("../index");

async function createMessagesTable() {
  const res = await query(
    `CREATE TABLE IF NOT EXISTS messages (message_id SERIAL PRIMARY KEY, sent timestamptz NOT NULL DEFAULT now(), bootcamper_id INTEGER REFERENCES bootcampers(bootcamper_id), message TEXT)`
  );

  console.log(`Log: create message table script`, res);
}

createMessagesTable();
