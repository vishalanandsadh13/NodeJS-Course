const http = require('http');
const calculatorHandler = require('./calculator')

const server = http.createServer(calculatorHandler);
const port = 3001;
server.listen(port, () => {
  console.log(`Server listening on address http://localhost:${port}`);
});  