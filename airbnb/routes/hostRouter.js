const exress = require("express");

const hostRouter = exress.Router();

hostRouter.get("/add-home", (req, res, next) => {
  console.log("Request URL:", req.url);
  console.log("Request Method:", req.method);
  res.send(`
    <h1>Register Your Home on AirBnb!</h1>
    <form action="/add-home" method="POST">
      <input type="text" name="homeName" placeholder="Enter Home Name"/>
      <input type="text" name="location" placeholder="Enter Location"/>
      <button type="submit">Submit</button>
    </form>
    `);
  next();
});

hostRouter.post("/add-home", (req, res, next) => {
  console.log("Request URL:", req.url);
  console.log("Request Method:", req.method);
  console.log("Form Data:", req.body);
  res.send(`<h1>Home Added Successfully!</h1><a href="/"> Go to Home </a>`);
  });

module.exports = hostRouter;