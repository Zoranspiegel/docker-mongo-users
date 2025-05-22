const { Router } = require("express");
const usersCtr = require("../controllers/usersController.js");

const router = Router();

router.get("/", usersCtr.getAllUsers);

router.get("/create", usersCtr.createUser);

router.get("/delete", usersCtr.deleteUser);

module.exports = router;
