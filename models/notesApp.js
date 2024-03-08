const { Schema, model } = require("mongoose");


// Schema =>
let notesSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  des: {
    type: String,
    required: true,
  },
});


// Model =>
module.exports = model("Notes", notesSchema, "Notes");