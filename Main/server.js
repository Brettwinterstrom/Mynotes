const http = require("http");
const fs = require("fs");

const PORT = 8080;

function handleRequest(request, response) {
    response.end("It works! Path Hit: " + request.url);
}

const server = http.createServer(handleRequest);

server.listen(PORT, function () {
    console.log("Server listening on: http://localhost" + PORT);
})