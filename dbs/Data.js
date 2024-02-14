const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const mongodb = async () => {
  try {
    let username = process.env.USER_NAME;
    let password = process.env.PASSWORD;
    let clusterURL = process.env.CLUSTER_URL;
    let databaseName = process.env.DATABASE_NAME;
    let URL = `mongodb+srv://${username}:${encodeURIComponent(password)}@${clusterURL}/${databaseName}?retryWrites=true&w=majority`;
    await mongoose.connect(URL);
    console.log("connection successful !!");
  } catch (error) {
    console.log("no connection ->  ", error);
  }
};

// Schema
let Schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  des: {
    type: String,
    required: true,
  },
});

// Model
let note = mongoose.model("note", Schema);

module.exports = { note, mongodb };
