const http = require("http");

// function requestListener(req, res){
//   console.Consolelog(req);
// }

// http.createServer(requestListener);

const server = http.createServer((req, res) => {
  console.log(req);
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server Running on the Address http://localhost:${PORT}`)
});