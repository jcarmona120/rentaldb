const User = require("./db/User.js");

var express = require("express");
var app = express();
var path = require("path");

var mongoose = require("mongoose");
var db = mongoose.connection;

app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/dist"));

mongoose.connect();

db.on("error", console.error.bind(console, "connection error"));
db.once("open", function() {
  console.log("we are connected");
});

var burger = new User({
  email: "jawann12345@gmail.com",
  name: "jawann carmona"
});

// burger.save(function(err, burger) {
//   if (err) return console.error(err);
//   console.log("saved");
// });

// User.create(
//   {
//     email: "carmona.jawann@gmail.com",
//     name: "Jawann Carmona"
//   },
//   function(err) {
//     if (err) return handleError(err);
//   }
// );

var passport = require("passport"),
  LocalStrategy = require("passport-local").Strategy;

passport.use(
  new LocalStrategy(function(user, email, done) {
    User.findOne({ user }, function(err, user) {
      if (err) return done(err);
      if (!user) {
        return done(null, false, { message: "incorrect username" });
      }
    });
  })
);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});

app.listen(3000, () => {
  console.log("GFS Database");
});
