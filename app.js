const express = require("express");
const path = require("node:path");
const app = express();

//App setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

//Routers setup
const indexRouter = require("./routes/indexRouter");
const newMessageRouter = require("./routes/newMessageRouter");
const detailsRouter = require("./routes/detailsRouter");
app.use("/", indexRouter);
app.use("/new", newMessageRouter);
app.use("/:messageId", detailsRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App listening on PORT : ${PORT}`);
});
