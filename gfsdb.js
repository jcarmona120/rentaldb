var mongoose = require("mongoose");
var db = mongoose.connection;

mongoose.connect(
  "mongodb://gfsdb138:gfsdb138@ds263500.mlab.com:63500/gfsdatabase"
);

db.on("error", console.error.bind(console, "connection error"));
db.once("open", function() {
  console.log("we are connected");
});
