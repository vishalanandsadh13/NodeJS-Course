const express = require("express");
const requestHandler = require("./user");
const app = express();

app.use("/",(req,res,next) => {
  console.log("came in firsst middleware", req.url, req.method);
  res.send("<h1>Hello from Express.js server!</h1>");
  next();
}); 

app.post("/submit-details",(req,res,next) => {
  console.log("came in second middleware", req.url, req.method);
 res.send("<p>Response from express server</p>");
});  

const port = 3001;
app.listen(port, ()=>{
  console.log(`Server is listening on port ${port}`);
})