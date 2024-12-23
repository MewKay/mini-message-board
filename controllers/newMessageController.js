const { insertNewMessage } = require("../db/queries");

const newMessageRender = function displayNewMessageForm(req, res) {
  res.render("form");
};

const addNewMessage = async function addNewMessageFromForm(req, res) {
  const text = req.body.text;
  const username = req.body.username;
  await insertNewMessage(text, username);

  res.redirect("/");
};

module.exports = { newMessageRender, addNewMessage };
