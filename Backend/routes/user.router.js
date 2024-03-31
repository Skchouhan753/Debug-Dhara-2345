const express = require("express");

const UserRouter = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// const { BlackListUserModel } = require("../models/BlockList.module");
// const { auth } = require("../middleware/auth.middleware");
const { UserModel } = require("../models/user.model");

require("dotenv").config();

// SingUP Router
UserRouter.post("/register", (req, res) => {
  const { username, email, password } = req.body;
  try {
    bcrypt.hash(password, 5, async (err, hash) => {
      if (err) {
        res.status(200).json({ msg: "Your Password is not secure" });
      } else {
        const user = new UserModel({
          username: username,
          email: email,
          password: hash,
        });
        await user.save();
        res.status(200).json({ msg: "User has been added" });
      }
    });
  } catch (error) {
    res.status(400).json({ msg: "Error: unable to register user" });
  }
});

// Login Router
UserRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email: email });
    if (user) {
      bcrypt.compare(password, user.password, (err, decode) => {
        if (decode) {
          res
            .status(200)
            .json({
              msg: "User succesefully login",
              Token: jwt.sign({ user }, process.env.SECRET_KEY),
            });

        } else {
          res.status(200).json({ msg: "Incorrect Password" });
        }
      });
    }
  } catch (error) {
    res.status(400).json({ msg: "Login Failed" });
  }
});

module.exports = {
  UserRouter
}
