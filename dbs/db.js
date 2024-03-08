const mongoose = require("mongoose");
// const dotenv = require("dotenv");
// dotenv.config();

exports.mongodb = async () => {
  try {
    // let username = process.env.USER_NAME;
    // let password = process.env.PASSWORD;
    // let clusterURL = process.env.CLUSTER_URL;
    // let databaseName = process.env.DATABASE_NAME;
    // let URL = `mongodb+srv://${username}:${encodeURIComponent(password)}@${clusterURL}/${databaseName}?retryWrites=true&w=majority`;
    let URL = "mongodb://127.0.0.1:27017/Notes-App"
    await mongoose.connect(URL);
    console.log("connection successful !!");
  } catch (error) {
    console.log("no connection ->  ", error);
  }
};