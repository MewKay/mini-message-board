const { getAllMessages } = require("../db/queries");
const { formatDistanceToNowStrict } = require("date-fns");

const toPreviewMessages = function shortenMessagesDisplay(message) {
  //Max length excluded
  const MAX_TEXT_TO_PREVIEW = 31;
  const isTextLongerThanMax = message.text.length >= MAX_TEXT_TO_PREVIEW;
  const ellipsis = isTextLongerThanMax ? "..." : "";
  const previewText = message.text.substring(0, MAX_TEXT_TO_PREVIEW) + ellipsis;

  const previewAdded = formatDistanceToNowStrict(message.added);

  return {
    id: message.id,
    text: previewText,
    username: message.username,
    added: previewAdded,
  };
};

const indexRender = async function displayMessagesList(req, res) {
  const messages = await getAllMessages();
  const previewMessages = messages.map(toPreviewMessages);
  res.render("index", { messages: previewMessages });
};

module.exports = { indexRender };
