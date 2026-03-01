const exress = require("express");
const path = require("path"); 

const hostRouter = exress.Router();

hostRouter.get("/add-home", (req, res, next) => {

  res.sendFile(path.join(__dirname, "../", "views", "addHome.html"), err => {
    if (err) return next(err);
  });     
}); 

hostRouter.post("/add-home", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "homeAdded.html"), err => {
    if (err) return next(err);
  });
  });

module.exports = hostRouter;