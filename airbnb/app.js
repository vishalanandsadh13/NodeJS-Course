const express = require("express");

const app = express();

app.use("/", (req, res, next) => {
  console.log(req.url, req.method );
  next();
});

app.use(express.urlencoded());

app.get("/", (req, res, next) => {
  console.log("Request URL:", req.url);
  console.log("Request Method:", req.method);
  res.send(`
    <h1>welcome to AirBnb!</h1>
    <a href="/add-home"> Add Home</a>
    `);
  next();
});

app.get("/add-home", (req, res, next) => {
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

app.post("/add-home", (req, res, next) => {
  console.log("Request URL:", req.url);
  console.log("Request Method:", req.method);
  console.log("Form Data:", req.body);
  res.send(`<h1>Home Added Successfully!</h1><a href="/"> Go to Home </a>`);
  });

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});