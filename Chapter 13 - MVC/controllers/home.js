const Home = require('../models/home');

exports.getAddHome = (req, res, next) => {
  res.render('addHome', { pageTitle: 'Add Home to airbnb', currentPage: 'Add Home' });
};

exports.postAddHome = (req, res, next) => {
  const { houseName, location, price, rating, photoUrl } = req.body;
  const home = new Home(houseName, location, price, rating, photoUrl);
  home.save();
  res.render('homeAdded', { pageTitle: 'Home Added Successfully', currentPage: 'Home Added' });
};

exports.getHome = (req, res, next) => {
  const registeredHomes = Home.fetchAll();
  res.render('home', {
    registeredHomes,
    pageTitle: 'airbnb Home',
    currentPage: 'Home'
  });
};

