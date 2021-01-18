const http = require("http");
const server = http.createServer((req, resp) => {
  console.log(req.url);
  resp.end("completed our side my name vaibhav palve");
});
server.listen(5000, () => {
  console.log("http://localhost:5000");
});

