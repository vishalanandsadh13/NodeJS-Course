const express = require("express");

const userRouter = express.Router();

userRouter.get("/", (req, res, next) => {
  console.log("Request URL:", req.url);
  console.log("Request Method:", req.method);
  res.send(`
    <h1>welcome to AirBnb!</h1>
    <a href="/host/add-home"> Add Home</a>
    `);
  next();
});

module.exports = userRouter;