const http = require('http')
const userRequestHandler = require('./app.js')

const server = http.createServer(userRequestHandler);
const port = 3000;
server.listen(port, () => {
  console.log(`Server listening on address http://localhost:${port}`);
});  