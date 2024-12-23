#! usr/bin/env node

const { Client } = require("pg");
require("dotenv").config();

const query = `
  CREATE TABLE IF NOT EXISTS messages(
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    text VARCHAR(200),
    username VARCHAR(20),
    added TIMESTAMPTZ DEFAULT NOW()
  );

  INSERT INTO messages(text, username, added)
  VALUES 
    ('Hi there!', 'Amando', '2024-11-23 14:34:00+05'),
    ('Hello world!', 'Charles', '2024-11-24 10:12:00+01'),
    ('What an overly simple message board :/', 'Xxx-DragonSlayer-xxX', '2024-11-24 23:32:00-09')
;
`;

const main = async () => {
  console.log("seeding...");

  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });

  await client.connect();
  await client.query(query);
  await client.end();

  console.log("done");
};

main();
