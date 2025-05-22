const { Router } = require("express");
const fs = require("fs");

const router = Router();

fs.readdirSync(__dirname).forEach((file) => {
  if (file !== "index.js" && file.endsWith("route.js")) {
    const endpoint = `/${file.split(".")[0]}`;
    const route = require(`./${file}`);
    router.use(endpoint, route);
  }
});

module.exports = router;
