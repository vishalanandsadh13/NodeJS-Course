const http = require("http");
const testingSyntax = require("./syntax");
const runtime = require("./runtime");
const logical = require("./logical");


const server = http.createServer((req,res) => {
  console.log("req",req.url, req.method);
  //testingSyntax();
  //runtime();
  logical();  
})

const port = 3001;
server.listen(port, ()=>{
  console.log(`Server is listening on port ${port}`);
})