const { Router } = require("express");
const { indexRender } = require("../controllers/indexController");

const indexRouter = Router();

indexRouter.get("/", indexRender);

module.exports = indexRouter;
