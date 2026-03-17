// External Module
const express = require('express');
const userRouter = express.Router();

// Local Module
const { registeredHomes } = require('./hostRouter');

const homeController = require('../controllers/home');
userRouter.get("/", homeController.getHome);

module.exports = userRouter;