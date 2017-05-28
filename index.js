var express = require('express');
var helmet = require('helmet');

var app = express();

// Use of helmet for security
app.use(helmet());

// Declare public folder for static assets
app.use(express.static(__dirname + "/public"));

// Serve view at root
app.get('/', function(req, res, next) {
    res.sendFile('index.html');
});

// Create server
app.listen(process.env.PORT || 3000, function() {
    console.log('Listening on http://localhost:' + (process.env.PORT || 3000));
});
