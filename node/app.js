// console.log("Welcome NodeJS");

// function add(a, b) {
//   return a + b;
// }

// const sum = add(10, 30);

// console.log(sum);

const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url);
  console.log(req.method);
  res.setHeader("content-type", "text/html");
  res.write("Work");
  res.end();
});

server.listen(3000, () => {
  console.log("Port 3000 opened");
});
