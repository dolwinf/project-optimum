var db = require("../models");
var bcrypt = require("bcrypt");
var { check, validationResult } = require("express-validator");
var jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");

module.exports = function(app) {
  app.post(
    "/api/login",

    function(req, res) {
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
              var token = jwt.sign({ user: id }, "secret", {
                expiresIn: 36000
              });
              res.cookie("token", token);
              res.json(data);
            }
          });
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
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
      }

      var firstName = req.body.firstName;
      var lastName = req.body.lastName;
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
              password: hash,
              firstName: firstName,
              lastName: lastName
            })
            .then(function(data) {
              var id = data.dataValues.id;

              var token = jwt.sign({ user: id }, "secret", {
                expiresIn: 36000
              });

              res.cookie("token", token);
              res.json(data);
            })
            .catch(function(err) {
              console.log(err);
              res.json(err);
            });
        });
      }
    }
  );

  app.get("/getdata", auth, function(req, res) {
    db.item
      .findAll({
        include: [{ model: db.user }]
      })
      .then(function(data) {
        res.json(data);
      });
  });

  app.get("/users/:email", function(req, res) {
    db.user
      .findOne({
        where: {
          email: req.params.email
        }
      })
      .then(function(data) {
        res.json(data);
      });
  });

  app.post("/items", auth, function(req, res) {
    db.item
      .update(
        {
          Name: req.body.Name,
          Description: req.body.Description,
          ImageURL: req.body.ImageURL
        },
        {
          where: {
            id: req.body.id
          }
        }
      )
      .then(function(data) {
        res.json({ redirect: "/landing" });
      });
  });
  app.post("/editItems", auth, function(req, res) {
    db.item
      .findAll({
        where: {
          id: req.body.editItemID
        }
      })
      .then(function(data) {
        res.json(data);
      });
  });
  app.get("/items/:id", auth, function(req, res) {
    db.item
      .findOne({
        where: {
          id: req.params.id
        }
      })
      .then(function(data) {
        res.json(data);
      });
  });

  app.get("/logout", function(req, res) {
    res.clearCookie("token");
    res.clearCookie("localhost");
    res.end();
  });

  app.post("/editProfile", auth, function(req, res) {
    db.user
      .update(
        {
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
          mobile: req.body.mobile,
          homeAddress: req.body.homeAddress
        },
        {
          where: {
            email: req.body.email
          }
        }
      )
      .then(function(data) {
        res.json(data);
      });
  });

  app.post("/createItem", auth, function(req, res) {
    db.item
      .create({
        Name: req.body.itemName,
        Description: req.body.itemDescription,
        ImageURL: req.body.itemURL,
        userId: req.body.id
      })
      .then(function(data) {
        res.json(data);
      });
  });

  app.post("/delete", auth, function(req, res) {
    db.item
      .destroy({
        where: {
          id: req.body.id
        }
      })
      .then(function(data) {
        res.json(data);
      });
  });
};
