// Import the express module
var express = require("express");

// Initialize express
var app = express();

// Home page
app.get("/", (req, res, next) => {
    res.set('Content-Type', 'text/html');
    res.send('<html><body><h1>Home Page</h1></body></html>');
});

// On path /api/ we serve JSON content
app.get("/api", (req, res, next) => {
    res.set('Content-Type', 'application/json');
    res.send('{"name":"John","age":30,"cars":["Ford", "BMW", "Fiat"]}');
});

// The server start listening on port 3001
app.listen(5678, () => {
    console.log("Server running on port 5678");
});