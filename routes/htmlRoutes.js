var db = require("../models");
var path = require("path");
const auth = require("../middleware/auth");

module.exports = function(app) {
	app.get("/", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/views/index.html"));
	});

	// app.get("/profile", auth, function(rq, res) {
	// 	res.sendFile(path.join(__dirname, "../public/views/profile.html"));
	// });

	app.get("/register", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/views/register.html"));
	});

	app.get("/login", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/views/login.html"));
	});

	// Load example page and pass in an example by id
	app.get("/example/:id", function(req, res) {
		// db.Example.findOne({ where: { id: req.params.id } }).then(function(
		//   dbExample
		// ) {
		//   res.render("example", {
		//     example: dbExample
		//   });
		// });
	});

	app.get("/success", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/views/thanks.html"));
	});
	// Render 404 page for any unmatched routes
	app.get("*", function(req, res) {
		res.send("404");
	});
};
