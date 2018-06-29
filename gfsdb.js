var mongoose = require("mongoose");
var db = mongoose.connection;

mongoose.connect(
  ENTER KEY HERE
);

db.on("error", console.error.bind(console, "connection error"));
db.once("open", function() {
  console.log("we are connected");
});
