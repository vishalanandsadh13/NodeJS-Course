// External Module
const express = require('express');
const storeRouter = express.Router();

const storeController = require('../controllers/storeController');
storeRouter.get("/", storeController.getHome);
storeRouter.get("/bookings", storeController.getBookings);  
storeRouter.get("/Index", storeController.getIndex);  
storeRouter.get("/favourites", storeController.getFavouriteList);   
module.exports = storeRouter;