const NotesCollections = require("../models/notesApp.js")


// Get Dashboard page controllers =>
exports.dashboardControllers = async (req, res) => {
  try {
    let NotesData = await NotesCollections.find();
    res.render("dashboard.ejs", { NotesData });
  } catch (error) {
    console.log(error)
  }
}

// Get Create page conrollers =>
exports.createGetControllers = (req, res) => {
  res.render("create.ejs");
}


// Post create page controllers =>
exports.createPostControllers = async (req, res) => {
  try {
    let insertData = await req.body;
    await NotesCollections.create(insertData);
    res.redirect("/dashboard");
  } catch (error) {
    console.log(error)
  }
}


// Get update page controllers =>
exports.getUpdateControllers = async (req, res) => {
  try {
    let { id } = req.params;
    let NotesData = await NotesCollections.find();
    NotesData.filter((element) => {
      if (element._id.toString() === id) {
        res.render("update.ejs", { element });
      }
    })
  } catch (error) {
    console.log(error)
  }
}

// Put update page controllers =>
exports.putUpdateControllers = async (req, res) => {
  try {
    let { id } = req.params;
    await NotesCollections.updateOne({ _id: id }, req.body)
    res.redirect("/dashboard")
  } catch (error) {
    console.log(error)
  }
}

// Delete page controllers =>
exports.deletePageControllers = async (req, res) => {
  try {
    let { id } = req.params;
    await NotesCollections.deleteOne({ _id: id })
    res.redirect("/dashboard")
  } catch (error) {
    console.log(error)
  }
}