const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const path = require("path");
const db = require("./models");

const passport = require("passport");
const passportJWT = require("passport-jwt");

let ExtractJwt = passportJWT.ExtractJwt;
let JwtStrategy = passportJWT.Strategy;

let jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = "sql#333";

// lets create our strategy for web token
let strategy = new JwtStrategy(jwtOptions, function(jwt_payload, next) {
  console.log("payload received", jwt_payload);
  let user = getUser({ id: jwt_payload.id });

  if (user) {
    next(null, user);
  } else {
    next(null, false);
  }
});

const getUser = async obj => {
  console.log(obj);
  return await db.user.findOne({
    where: obj
  });
};

// use the strategy
passport.use(strategy);

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
// initialize passport with express
app.use(passport.initialize());

// parse application/json
app.use(bodyParser.json());
//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//html routes
app.get("/register", function(req, res) {
  // db.Example.findAll({}).then(function(dbExamples) {
  //   res.render("index", {
  //     msg: "Welcome!",
  //     examples: dbExamples
  //   });
  // });
  res.sendFile(path.join(__dirname, "./public/views/register.html"));
});

app.get("/login", function(req, res) {
  // db.Example.findAll({}).then(function(dbExamples) {
  //   res.render("index", {
  //     msg: "Welcome!",
  //     examples: dbExamples
  //   });
  // });
  res.sendFile(path.join(__dirname, "./public/views/login.html"));
});

// Render 404 page for any unmatched routes
app.get("*", function(req, res) {
  res.send("404");
});

// set some basic routes
app.get("/", function(req, res) {
  res.json({ message: "Express is up!" });
});

//login route
app.post("/login", async function(req, res, next) {
  const { email, password } = req.body;
  if (email && password) {
    let user = await getUser({ email: email });
    if (!user) {
      res.status(401).json({ message: "No such user found" });
    }
    if (user.password === password) {
      // from now on we'll identify the user by the id and the id is the
      // only personalized value that goes into our token
      let payload = { id: user.id };
      let token = jwt.sign(payload, jwtOptions.secretOrKey);
      res.json({ msg: "ok", token: token });
    } else {
      res.status(401).json({ msg: "Password is incorrect" });
    }
  }
});

// protected route
app.get(
  "/protected",
  passport.authenticate("jwt", { session: false }),
  function(req, res) {
    res.send("Success! You can now see this without a token.");
  }
);

// start app
app.listen(3000, function() {
  console.log("Express is running on port 3000");
});
