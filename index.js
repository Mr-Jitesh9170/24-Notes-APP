const express = require("express");
const app = express();
let NotesData = require("./dbs/Data");




app.use(express.static("public"));
app.set("views engine", "ejs");


// routers =>
app.get("/dashboard", (req, res) => {
  res.render("dashboard.ejs", { NotesData });
});

app.get("/create", (req, res) => {
  res.render("create.ejs");
})

app.get("/update", (req, res) => {
  res.render("update.ejs");
})











// port =>
app.listen(3000, () => {
  console.log("Server is live on -> ", 3000);
});