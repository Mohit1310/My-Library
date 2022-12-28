const mongoose = require("mongoose");
// This is database
mongoose.connect(
  "mongodb://0.0.0.0:27017/mylibrary",
  { useNewUrlParser: true },
  (err) => {
    if (!err) {
      console.log("Connection Succeded " + err);
    } else {
      console.log("Connection Failed " + err);
    }
  }
);

require("./author");