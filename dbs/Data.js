const mongoose = require("mongoose")
const mongodb = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/Note" )
    console.log("conection successfull")
  } catch (error) {
    console.log(error)
  }
}

// created schema =>
let Schema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  des: {
    type: String,
    required: true
  },
})

// dummy data =>

// let NotesData = [
//   {
//     title: "About Yourself",
//     des: "My name is Jitesh Pandey"
//   },
//   {
//     title: "what you do",
//     des: "I am an Software Engineer"
//   }
// ]

// model =>
let note = mongoose.model("note", Schema);


// Data inserted =>

// const InsertData = async () => {
//   try {
//     await note.insertMany(NotesData)
//     console.log("data inserted")
//   } catch (error) {
//     console.log(error)
//   }
// }

// InsertData();





module.exports = { note, mongodb };