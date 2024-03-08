const express = require("express");
let { mongodb } = require("./dbs/db.js");
const methodOverride = require("method-override");

// database connections =>
mongodb();

const app = express();

// middlewares =>
app.use(express.static("public"));
app.set("views engine", "ejs");
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(methodOverride("_method"))


// Routes =>
app.use(require("./routes/notesRoutes.js"))
app.use(require("./routes/authRoutes.js"))

// port =>
app.listen(8080, () => {
  console.log("Server is live on -> ", 8080);
});