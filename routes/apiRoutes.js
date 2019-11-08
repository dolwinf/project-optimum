var db = require("../models");
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
      const email = req.body.email;
      const password = req.body.password;
      const passwordr = req.body.passwordr;

      if (password !== passwordr) {
        res.json("Error: Passwords do no match");
      } else {
        db.user
          .create({
            email,
            password
          })
          .then(function(data) {
            res.json(data);
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
