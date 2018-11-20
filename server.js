// modules
const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");

const app = express();

// port number
const PORT = 3001;

// is this needed? configuring body parser for AJAX request
// if i end up needed an ajax request then yes i guess
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// serve static assets
app.use(express.static("client/build"));

app.use(routes);

app.listen(PORT, function() {
    console.log(`API server now listening on PORT ${PORT}!`);
});

// export app
exports = module.exports = app;