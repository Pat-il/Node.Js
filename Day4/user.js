// Taking the Input From The User......

const http = require("http");
const fs = require('fs');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);

  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<body>");
    res.write("<head><title>Complete Coding</title></head>");
    res.write("<body><h1>Enter User Details: </h1>");
    res.write('<form action="submit-details" method="POST">');
    res.write(
      '<input type="text" name="username" placeholder="Enter Your name"><br>'
    );
    res.write('<label for="male">Male</label>');
    res.write('<input type="radio" value="male" id="male" name="gender" >');
    res.write('<label for="female">Female</label>');
    res.write(
      '<input type="radio" value="female" id="female" name="gender" ><br>'
    );
    res.write('<input type="submit" value="Submit">');
    res.write("</form>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (
    req.url.toLowerCase() === "/submit-details" &&      // Here We Redirecting The Page
    req.method == "POST") 
  {
    fs.writeFileSync('user.txt', 'Prashant Jain');
    res.statusCode = 302;
    res.setHeader('Location', '/');
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Complete Coding</title></head>");
  res.write("<body><h1>Like / Share / Subscribe</h1></body>");
  res.write("</html>");
  res.end();
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server Running on the Address http://localhost:${PORT}`);
});
