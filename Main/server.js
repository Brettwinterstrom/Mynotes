const http = require("http");
const fs = require("fs");
const express = require("express")

var PORT = process.env || 3000;
const app = express();

app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
});

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});

// const server = http.createServer(handleRequest);

// function handleRequest(req, res) {
//     var path = req.url;

//     switch (path) {
//         case "/notes":
//             return fs.readFile(__dirname + "/public/notes.html", function (err, data) {
//                 if (err) throw err;
//                 res.writeHead(200, { "Content-Type": "text/html" });
//                 res.end(data);
//             });
//         default:
//             return fs.readFile(__dirname + "/public/index.html", function (err, data) {
//                 if (err) throw err;
//                 res.writeHead(200, { "Content-Type": "text/html" });
//                 res.end(data);
//             });
//     }
// }


app.listen(PORT, function () {
    console.log("Server listening on Port: " + PORT);
});