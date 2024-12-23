const pool = require("./pool");

const getAllMessages = async function queryAllMessagesInformationFromDB() {
  const query = `
    SELECT *
    FROM messages
  `;

  const { rows } = await pool.query(query);
  return rows;
};

module.exports = { getAllMessages };
