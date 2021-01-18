"use strict";

var http = require("http");

var server = http.createServer(function (request, response) {
  console.log(request.url);
  response.end("hello world");
});
server.listning(5000, function () {
  console.log("listing to http://localhost:5000");
});