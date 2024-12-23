const { format } = require("date-fns/format");
const { getMessageWithId } = require("../db/queries");

const detailsRender = async function displayMessageDetails(req, res) {
  const messageId = Number(req.params.messageId);
  const messageQuery = await getMessageWithId(messageId);

  //Date format example: Jan 1st, 2000 - 12:00 PM
  const formattedAddedDate = format(messageQuery.added, "PP - p");

  const messageToDisplay = {
    ...messageQuery,
    added: formattedAddedDate,
  };

  res.render("details", { message: messageToDisplay });
};

module.exports = { detailsRender };
