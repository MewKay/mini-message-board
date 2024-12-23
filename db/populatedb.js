#! usr/bin/env node

const { Client } = require("pg");

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

//Url can be passed as the first argument of the script
const DATABASE_URL = process.argv[2];

const main = async () => {
  console.log("seeding...");
  let client;

  try {
    client = new Client({
      connectionString: DATABASE_URL,
    });

    await client.connect();
    await client.query(query);

    console.log("done");
  } catch (e) {
    console.error(e);
  } finally {
    if (client) await client.end();
  }
};

main();
