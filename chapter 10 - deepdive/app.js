const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const userRequestHandler = require("./user")

app.use("/",(req,res,next)=>{
  console.log("First Dummy middleware",req.url,req.method);
  next();
})

app.use("/",(req,res,next)=>{
  console.log("Second Dummy middleware",req.url,req.method);
  next();
})

app.use("/submit-details",(req,res,next)=>{
  console.log("came in second middleware",req.url,req.method);
  res.send("<h1>Details Submitted Successfully!</h1>");
  next();
})

app.get("/",(req,res,next)=>{
  console.log("handlong / for get",req.url,req.method);
  res.send("<h1>welcome to Landing Page!</h1>");
});

app.get("/contact-us",(req,res,next)=>{
  console.log("handlong /contact-us for get",req.url,req.method);
  res.send(`
    <h1>please give your details!</h1>
    <form action="/contact-us" method="POST">
      <input type="text" name="username" placeholder="Enter your name"/>
      <input type="email" name="email" placeholder="Enter your email"/>
      <button type="submit">Submit</button>
    </form>
  `);
});

app.post("/contact-us",(req,res,next)=>{
  console.log("first handling",req.url,req.method);
 next();
});

app.use(bodyParser.urlencoded());

app.post("/contact-us",(req,res,next)=>{
  console.log("handlong /contact-us for post",req.url,req.method,req.body);
  res.send("<h1>Thanks for submitting your details. We will get back to you soon!</h1>");
});

const PORT = 3001
app.listen(PORT,()=>{
  console.log(`Server is listening to port ${PORT}`)
})