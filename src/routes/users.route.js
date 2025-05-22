const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  res.json("ALL USERS").status(200);
});

module.exports = router;
