const messages = require("../messages");

const newMessageRender = function displayNewMessageForm(req, res) {
  res.render("form");
};

const addNewMessage = function addNewMessageFromForm(req, res) {
  const text = req.body.text;
  const user = req.body.user;
  const added = new Date();

  messages.push({ text, user, added });

  res.redirect("/");
};

module.exports = { newMessageRender, addNewMessage };
