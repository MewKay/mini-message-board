const pool = require("./pool");

const getAllMessages = async function queryAllMessagesInformationFromDB() {
  const query = `
    SELECT *
    FROM messages
  `;

  const { rows } = await pool.query(query);
  return rows;
};

const getMessageWithId = async function queryMessageMatchingTheIdFromDB(
  messageId
) {
  const query = `
    SELECT *
    FROM messages
    WHERE id = $1
  `;
  const data = [messageId];

  const { rows } = await pool.query(query, data);
  const queriedMessage = rows[0];
  return queriedMessage;
};

const insertNewMessage = async function insertMessageIntoTheDB(text, username) {
  //'id' is auto-incremented and 'added' is set to NOW() by default
  const query = `
    INSERT INTO messages(text, username)
    VALUES ($1, $2)
  `;
  const data = [text, username];

  await pool.query(query, data);
};

module.exports = { getAllMessages, getMessageWithId, insertNewMessage };
