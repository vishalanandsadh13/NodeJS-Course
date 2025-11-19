const calculatorHandler = (req, res) => {
  if (req.url === "/") {
      res.setHeader('Content-Type', 'text/html');
    res.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Calculator</title>
        </head>
        <body>
          <h1>Welcome to the calculator <a href="/calculate">Home</a></h1>
        </body>
      </html>
      `);
    res.end();
  }
  else if (req.url === "/calculate") {
      res.setHeader('Content-Type', 'text/html');
    res.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Calculator</title>
        </head>
        <body>
          <form action="/sum" method="POST">
            <input type="number" name="num1" placeholder="First Number" required>
            <input type="number" name="num2" placeholder="Second Number" required>
            <button type="submit">Calculate</button>
          </form>
        </body>
      </html>
    `);
  }
  else if (req.url === "/sum" && req.method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const params = new URLSearchParams(parsedBody);
      const num1 = parseFloat(params.get("num1"));
      const num2 = parseFloat(params.get("num2"));
      const sum = num1 + num2;
      res.write(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>Calculator</title>
          </head>
          <body>
            <h1>Result: ${sum}</h1>
            <a href="/calculate">Back</a>
          </body>
        </html>
      `);
      return res.end();
    });
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/html'); 
    res.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>404 Not Found</title>
        </head>
        <body>
          <h1>404 Not Found</h1>
          <p>The requested resource was not found.</p>
        </body>
      </html>
    `);
    return res.end();
  }
  
};

module.exports = calculatorHandler;
