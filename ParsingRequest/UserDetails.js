const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
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
  }
  if (req.url.toLowerCase() === "/submit-details" && req.method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end", () => {
      const fullBody = Buffer.concat(body).toString();
      console.log(fullBody);
      // const userDetails = fullBody.split('&').reduce((acc, curr) => {
      //   const [key, value] = curr.split('=');
      //   acc[decodeURIComponent(key)] = decodeURIComponent(value);
      //   return acc;
      // }, {});
      // console.log(userDetails);
      const params = new URLSearchParams(fullBody);
      const username = params.get("username");
      const gender = params.get("gender");
      console.log({ username, gender });
      const bodyObject = { username, gender };
      fs.writeFileSync("user.txt", JSON.stringify(bodyObject));
    });

    res.statusCode = 302;
    res.setHeader("Location", "/");
    res.end();
  }
});

const port = 3000;

server.listen(port, () => {
  console.log(`Server listening on address http://localhost:${port}`);
});
