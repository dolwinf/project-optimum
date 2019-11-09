var db = require("../models");
var bcrypt = require("bcrypt");
var { check, validationResult } = require("express-validator/check");
var jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");

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
				.findOne({
					where: {
						email: req.body.email
					}
				})
				.then(function(data) {
					// res.json(data);

					//Grab the user's details from the response
					var id = data.dataValues.id;
					var password = data.dataValues.password;

					bcrypt.compare(req.body.password, password, function(err, resp) {
						if (!resp) {
							res.send("Password incorrect");
						} else {
							res.json(data);
							var payload = {
								user: {
									id
								}
							};
							jwt.sign(payload, "secret", { expiresIn: 36000 }, function(
								err,
								token
							) {
								if (err) throw err;
								console.log(token);
							});
						}
					});

					// var email = data[0].dataValues.email;
				});
		}
	);

	// Create a new user and encrypt hash password using bcrypt and store encrypted password in the database
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
							// var id = data[0].dataValues.id;
							// var email = data[0].dataValues.email;
							// var payload = {
							// 	user: {
							// 		id
							// 	}
							// };
							// jwt.sign(payload, "secret", { expiresIn: 36000 }, function(
							// 	err,
							// 	token
							// ) {
							// 	if (err) throw err;
							// 	console.log(token);
							// });
						})
						.catch(function(err) {
							res.json(err);
						});
				});
			}
		}
	);

	app.get("/protected", auth, function(req, res) {
		res.send("Protected route");
	});
	// Delete an example by id
	app.delete("/api/examples/:id", function(req, res) {
		// db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
		//   res.json(dbExample);
		// });
	});
};
