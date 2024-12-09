const { Router } = require("express");
const {
  newMessageRender,
  addNewMessage,
} = require("../controllers/newMessageController");

const newMessageRouter = Router();

newMessageRouter.get("/", newMessageRender);
newMessageRouter.post("/", addNewMessage);

module.exports = newMessageRouter;
