const User = require("../models/User.js");

const getAllUsers = async (req, res, next) => {
  try {
    console.log('Getting all users...');
    const allUsers = await User.find();
    res.json(allUsers).status(200);
  } catch (error) {
    next(error);
  }
};

const createUser = async (req, res, next) => {
  try {
    console.log('Creating user...')
    const newUser = {
      username: "Zoran",
      email: "zoran@email.com",
      avatar: "caripela.jpg",
    };

    await User.create(newUser);
    res.json({ message: "Success" }).status(201);
  } catch (error) {
    next(error);
  }
};

const deleteUser = async (req, res) => {
  try {
    console.log('Deleting user...');
    await User.deleteOne({ username: "Zoran" });
    res.json({ message: "Success" }).status(201);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllUsers,
  createUser,
  deleteUser,
};
