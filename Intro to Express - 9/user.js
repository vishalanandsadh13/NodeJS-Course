const userRequestHandler = (req, res) => {
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>My First Page</title></head>");
    res.write("<body><h1>Enter your Details</h1>");
    res.write('<form action="/submit-details" method="POST">');
    res.write(
      '<input type="text" name="username" placeholder="Enter Username"/>'
    );
    res.write("<br/>");
    res.write('<label for="male">Male </label>');
    res.write('<input type="radio" id="male" name="gender" value="male"/>');
    res.write("<br/>");
    res.write('<label for="female">Female </label>');
    res.write('<input type="radio" id="female" name="gender" value="female"/>');
    res.write("<br/>");
    res.write('<button type="submit">Submit</button>');
    res.write("</form>");
    res.write("</body>");
    res.write("</html>");
    res.end();
  } else if (
    req.url.toLowerCase() === "/submit-details" &&
    req.method === "POST"
  ) {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end", () => {
      const fullBody = Buffer.concat(body).toString();
      const params = new URLSearchParams(fullBody);
      const bodyObject = Object.fromEntries(params);
      console.log(bodyObject);
      res.statusCode = 302;
      res.setHeader("Location", "/");
      res.end();
    });
  } else {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>My First Page</title></head>");
    res.write("<body><h1>Page Not Found</h1></body>");
    res.write("</html>");
    res.end();  
  }
};
module.exports = userRequestHandler;
