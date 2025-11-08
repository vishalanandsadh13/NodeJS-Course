const http = require('http')

const server = http.createServer((req, res) => {
  console.log(req)
});

const port = 3000;

server.listen(port, () => {
  console.log(`Server listening on address http://localhost:${port}`);
});