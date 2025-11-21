const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Request received");

  process.nextTick(() => console.log("Next Tick"));
  Promise.resolve().then(() => console.log("Promise"));

  setTimeout(() => console.log("Timeout"), 0);
  setImmediate(() => console.log("Immediate ."));

  res.end("Hello World");
});

server.listen(3000, () => console.log("Server running"));
