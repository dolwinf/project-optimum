var db = require("../models");
const errors = [];

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    // db.Example.findAll({}).then(function(dbExamples) {
    //   res.json(dbExamples);
    // });
  });

  app.post("/api/users/login", function(req, res) {
    db.user
      .findAll({
        where: {
          email: req.body.email
        }
      })
      .then(function(data) {
        console.log(data);
      })
      .catch(function(error) {
        console.log(error);
      });
  });

  // Create a new user
  app.post("/api/users", function(req, res) {
    const email = req.body.email;
    const password = req.body.password;
    const passwordr = req.body.passwordr;

    if (!email || !password || !passwordr) {
      errors.push({ msg: "Please enter all fields." });
    }
    if (password !== passwordr) {
      errors.push({
        msg: "Password do not match. Please enter password again."
      });
    }

    if (password.length < 9) {
      errors.push({ msg: "Password should be more than 8 characters." });
    }

    if (errors.length > 0) {
      res.redirect("/register");
    } else {
      db.user.create(req.body).then(function(data) {
        res.redirect("/");
      });
    }
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    // db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
    //   res.json(dbExample);
    // });
  });
};
