const messages = require("../messages");
const { formatDistanceToNowStrict } = require("date-fns");

const toPreviewMessages = function shortenMessagesDisplay(message) {
  //Max length excluded
  const MAX_TEXT_TO_PREVIEW = 31;
  const isTextLongerThanMax = message.text.length >= MAX_TEXT_TO_PREVIEW;
  const ellipsis = isTextLongerThanMax ? "..." : "";
  const previewText = message.text.substring(0, MAX_TEXT_TO_PREVIEW) + ellipsis;

  const previewAdded = formatDistanceToNowStrict(message.added);

  return {
    text: previewText,
    user: message.user,
    added: previewAdded,
  };
};

const indexRender = (req, res) => {
  const previewMessages = messages.map(toPreviewMessages);
  res.render("index", { messages: previewMessages });
};

module.exports = { indexRender };
