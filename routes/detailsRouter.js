const { Router } = require("express");
const { detailsRender } = require("../controllers/detailsController");

const detailsRouter = Router({ mergeParams: true });

detailsRouter.get("/", detailsRender);

module.exports = detailsRouter;
