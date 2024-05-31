const express = require("express");
const router = express.Router();

router.use((req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.status(404).render('404');
});

module.exports = router;