// Get login page controllers  =>
exports.notesGetControllers = async (req, res) => {
  res.render("login.ejs");
};

// Post login page controllers =>
exports.notesPostControllers = (req, res) => {
  let data = req.body;
  console.log("login data -> ", data)
}
