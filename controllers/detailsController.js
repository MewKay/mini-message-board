const { format } = require("date-fns/format");
const messages = require("../messages");

const detailsRender = function displayMessageDetails(req, res) {
  const messageId = Number(req.params.messageId);
  const messageQuery = messages.find((message) => message.id === messageId);

  //Date format example: Jan 1st, 2000 - 12:00 PM
  const formattedAddedDate = format(messageQuery.added, "PP - p");

  const messageToDisplay = {
    ...messageQuery,
    added: formattedAddedDate,
  };

  res.render("details", { message: messageToDisplay });
};

module.exports = { detailsRender };
