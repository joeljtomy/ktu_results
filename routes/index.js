const express = require("express");
const router = express.Router();
const Result = require("../schemas/result");
const ResultNotification = require("../schemas/resultNotification");

router.get("/", async (req, res) => {
  const { resultName, publishDate } = await ResultNotification.findOne({});
  res.render("index", {
    resultName: resultName,
    publishDate: publishDate.toUTCString(),
  });
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const result = await Result.findOne({ id });
  if (result == null) res.status(400).render("noUser", { id });
  else res.render("individualresult", result);
});

router.use(express.urlencoded({ extended: true }));

router.post("/", (req, res) => {
  const registerNumber = req.body.registernumber.trim().toUpperCase();
  res.redirect("/" + registerNumber);
});

module.exports = router;
