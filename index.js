const express = require("express");
const cors = require("cors");
const methodOverride = require("method-override")
const app = express();
let NotesData = require("./dbs/Data")
const port = 3000;

// Enable CORS
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(methodOverride("_method"))
app.set("views engine", "ejs")


app.set("views engine", "ejs");

app.get("/dashboard", (req, res) => {
  res.render("dashboard.ejs", { NotesData })
});





app.listen(port, () => {
  console.log("Server is live on -> ", port);
});
