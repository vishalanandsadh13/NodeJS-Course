const express = require("express");
const app = express();

app.use("/",(req,res,next)=>{
  console.log("came in firsst middleware",req.url,req.method);
  next();
})

app.use("/",(req,res,next)=>{
  console.log("came in second middleware",req.url,req.method);
  next();
})

// app.use("/",(req,res,next)=>{
//   console.log("came in third middleware",req.url,req.method);
//   res.send("<h1>Hello from Express.js server!</h1>");
// })
app.get("/",(req,res,next)=>{
  console.log("handlong / for get",req.url,req.method);
  res.send("<h1>welcome to Landing Page!</h1>");
});

app.get("/contact-us",(req,res,next)=>{
  console.log("handlong /contact-us for get",req.url,req.method);
  res.send("<h1>please give your details!</h1>");
});

const PORT = 3001
app.listen(PORT,()=>{
  console.log(`Server is listening to port ${PORT}`)
})