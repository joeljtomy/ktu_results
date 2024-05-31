const express = require("express");
const selfPing = require("./functions/selfPing");
const useIndex = require("./routes/index");
const use404 = require("./routes/404");
const initDB = require("./functions/initDB");
const pingKtu = require("./functions/ping");
require("dotenv").config();

const app = express();
app.set("view engine", "ejs");
app.use("/", useIndex);
app.use("", use404);

const port = process.env.PORT;
initDB().then(() => {
  app.listen(port, () => console.log(`Server ready on port ${port}.`));
});

setInterval(selfPing, 1000 * 60 * 14);

pingKtu();

module.exports = app;
