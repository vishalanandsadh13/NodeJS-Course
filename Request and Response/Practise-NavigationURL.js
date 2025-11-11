const http = require('http')
const fs = require('fs');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  if (req.url === '/') {
     res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Page</title></head>');
  res.write('<body>');
  res.write('<h1>Welcome to the Navigation Page</h1>');
  res.write('<Nav>');
  res.write('<button type="button"><a href="/home">Home</a></button>');
  res.write('<button type="button"><a href="/about">About</a></button>');
  res.write('<button type="button"><a href="/contact">Contact</a></button>');
  res.write('</Nav>');
  res.write('</body>');
  res.write('</html>');
  res.end();
  }
  if (req.url.toLowerCase() === '/home') {  
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Home</title></head>');
    res.write('<body><h1>Welcome to the Home Page</h1></body>');
    res.write('</html>');
    res.end();
  }
  if (req.url.toLowerCase() === '/about') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>About</title></head>');
    res.write('<body><h1>Welcome to the About Page</h1></body>');
    res.write('</html>');
    res.end();
  }
  if (req.url.toLowerCase() === '/contact') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Contact</title></head>');
    res.write('<body><h1>Welcome to the Contact Page</h1></body>');
    res.write('</html>');
    res.end();
  }     
 
});

const port = 3000;

server.listen(port, () => {
  console.log(`Server listening on address http://localhost:${port}`);
}); 