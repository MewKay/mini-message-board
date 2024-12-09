const messages = require("../messages");

const newMessageRender = function displayNewMessageForm(req, res) {
  res.render("form");
};

const addNewMessage = function addNewMessageFromForm(req, res) {
  const id = messages.length;
  const text = req.body.text;
  const user = req.body.user;
  const added = new Date();

  messages.push({ id, text, user, added });

  res.redirect("/");
};

module.exports = { newMessageRender, addNewMessage };
