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

module.exports = { getAllMessages, getMessageWithId };
