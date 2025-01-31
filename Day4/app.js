// const http = require('http');

// let server = http.createServer((req, res) => {
//   console.log(req);
//   process.exit();
// })

// const PORT = 3000;

// server.listen(PORT, () => {
//   console.log(`Server Running on the Address http://localhost:${PORT}`);
// })

// **** If we only want to execute req.header, req.url, req.method ****

// const http = require('http');

// let server = http.createServer((req, res) => {
//   console.log(req.url, req.method, req.headers);
//   process.exit();
// })

// const PORT = 3000;

// server.listen(PORT, () => {
//   console.log(`Server Running on the Address http://localhost:${PORT}`);
// })

// **** Sending Responce ****

const http = require("http");

let server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);

  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Complete Coding</title></head>");
    res.write("<body><h1>Welcome To Home</h1></body>");
    res.write("</html>");
    return res.end();
  } else if (req.url === "/products") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Complete Coding</title></head>");
    res.write("<body><h1>Checkout Products</h1></body>");
    res.write("</html>");
    return res.end();
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
