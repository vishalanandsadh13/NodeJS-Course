const http = require('http')
const fs = require('fs');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  if (req.url === '/') {
     res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Page</title></head>');
  res.write('<body><h1>Enter your Details</h1>');
  res.write('<form action="/submit-details" method="POST">');
  res.write('<input type="text" name="username" placeholder="Enter Username"/>');
  res.write('<br/>');
  res.write('<label for="male">Male </label>');
  res.write('<input type="radio" id="male" name="gender" value="male"/>');
  res.write('<br/>');   
  res.write('<label for="female">Female </label>');
  res.write('<input type="radio" id="female" name="gender" value="female"/>');
  res.write('<br/>'); 
  res.write('<button type="submit">Submit</button>');
  res.write('</form>');
  res.write('</body>');
  res.write('</html>');
  res.end();
  }
  if (req.url.toLowerCase() === '/submit-details' && req.method === 'POST') {  
    fs.writeFileSync('user.txt', 'Vishal Anand Sadh');
    res.statusCode = 302;
    res.setHeader('Location', '/');
    res.end();
  //   res.setHeader('Content-Type', 'text/html');
  // res.write('<html>');
  // res.write('<head><title>My First Page</title></head>');
  // res.write('<body><h1>Your Details are submitted successfully!</h1></body>');
  // res.write('</html>');
  // res.end();
  }
 
});

const port = 3000;

server.listen(port, () => {
  console.log(`Server listening on address http://localhost:${port}`);
}); 