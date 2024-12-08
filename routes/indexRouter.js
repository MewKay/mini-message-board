const { Router } = require("express");

const indexRouter = Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

indexRouter.get("/", (req, res) => {
  res.render("index", { messages: messages });
});

indexRouter.post("/new", (req, res) => {
  const text = req.body.text;
  const user = req.body.user;
  const added = new Date();

  messages.push({ text, user, added });

  res.redirect("/");
});

module.exports = indexRouter;
