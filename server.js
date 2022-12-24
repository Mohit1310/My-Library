require('./models/db')
require("dotenv").config();

// if (process.env.NODE_ENV !== "production") {
//   require("dotenv").config();
// }

const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");
const bodyParser = require("body-parser");

const indexRouter = require("./routes/index");
const authorRouter = require("./routes/authors");
const bookRouter = require("./routes/books");

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("layout", "layouts/layout");
app.use(expressLayouts);
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: false }));

// const mongoose = require("mongoose");
// mongoose.connect(
//   process.env.DATABASE_URL,
//   { dbName: "my-library", useNewUrlParser: true },
//   (err) => (err ? console.log(err) : console.log("Connected to my-library"))
// );
// const db = mongoose.connection
// db.on('error', error => console.error(error))
// db.once('open', () => console.log('Connected to mongoose'))

app.use("/", indexRouter);
app.use("/authors", authorRouter);
app.use("/books", bookRouter);

app.listen(3001, () => {
    console.log('Express started at port 3001');
});
