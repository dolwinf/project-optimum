var db = require("../models");
var bcrypt = require("bcrypt");
var { check, validationResult } = require("express-validator/check");

module.exports = function(app) {
	app.post(
		"/api/login",
		[
			check("email", "Email is required").isEmail(),
			check("password", "Password is required").isLength({ min: 6 })
		],
		function(req, res) {
			const errors = validationResult(req);
			if (!errors.isEmpty()) {
				return res.status(400).json({ errors: errors.array() });
			}
			db.user
				.findAll({
					where: {
						email: req.body.email
					}
				})
				.then(function(data) {
					res.json(data);
					res.redirect("/success");
				})
				.catch(function(error) {
					res.json(error);
				});
		}
	);

	// Create a new user
	app.post(
		"/api/register",
		[
			check("email", "Email is required").isEmail(),
			check("password", "Password is required").isLength({ min: 6 }),
			check("passwordr", "Please re-enter your password").isLength({ min: 6 })
		],
		function(req, res) {
			var email = req.body.email;
			var password = req.body.password;
			var passwordr = req.body.passwordr;

			if (password !== passwordr) {
				res.json("Error: Passwords do no match");
			} else {
				bcrypt.hash(password, 10).then(function(hash) {
					db.user
						.create({
							email: email,
							password: hash
						})
						.then(function(data) {
							res.json(data);
						})
						.catch(function(err) {
							res.json(err);
						});
				});
			}
		}
	);

	// Delete an example by id
	app.delete("/api/examples/:id", function(req, res) {
		// db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
		//   res.json(dbExample);
		// });
	});
};
