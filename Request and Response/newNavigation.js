const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  if (req.url === "/") {
    res.write(`
    <html>
      <head>
        <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
          </head>
          <body>
            <h1>Welcome to the Navigation Page</h1>
            <Nav>
              <ul></ul>
              <li><a href="/home">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </Nav>
        </body>
    </html>
    `);
      res.end();
  }
  if (req.url.toLowerCase() === "/home") {
    res.write(`
    <html>
      <head><title>Home</title></head>
      <body><h1>Welcome to the Home Page</h1></body>
    </html>
    `);
    res.end();
  }
  if (req.url.toLowerCase() === "/about") {
    res.write(`
    <html>
      <head><title>About</title></head>   
      <body><h1>Welcome to the About Page</h1></body>
    </html>
    `);
    res.end();
  }
  if (req.url.toLowerCase() === "/contact") {
    res.write(`
    <html>
      <head><title>Contact</title></head>
      <body><h1>Welcome to the Contact Page</h1></body>
    </html>
    `);
    res.end();
  }

});

const port = 3000;
server.listen(port,()=>{
  console.log(`Server listening on address http://localhost:${port}`);
})
