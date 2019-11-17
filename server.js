// require("dotenv").config();
var express = require("express");
var cookieParser = require("cookie-parser");

var db = require("./models");
var app = express();
var PORT = process.env.PORT || 3000;

// Middleware

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
app.use(cookieParser());

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("Listening on port", PORT);
  });
});

module.exports = app;
