const Home = require('../models/home');



exports.getHome = (req, res, next) => {
  const registeredHomes = Home.fetchAll();
  res.render('store/index', {
    registeredHomes,
    pageTitle: 'Home List',
    currentPage: 'Home'
  });
};

exports.getIndex = (req, res, next) => {
  const registeredHomes = Home.fetchAll();
  res.render('store/home-list', {
    registeredHomes,
    pageTitle: 'airbnb Home',
    currentPage: 'Home'
  });
};

exports.getBookings = (req, res, next) => {
  res.render('store/booking', {
    pageTitle: 'airbnb Bookings',
    currentPage: 'Bookings'
  });
};

exports.getFavouriteList = (req, res, next) => {
   const registeredHomes = Home.fetchAll();
  res.render('store/fav-list', {
    registeredHomes,
    pageTitle: 'My Favourite List',
    currentPage: 'Favourite List'
  });
  
};

