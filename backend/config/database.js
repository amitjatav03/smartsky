const mongoose = require("mongoose");
require("dotenv").config();

exports.connect = () => {
    mongoose.connect(process.env.MONGODB_URL)
    .then(() => {
        console.log("Database Successfully Connected");
    })
    .catch((error) => {
        console.log("Database Connection Failed");
        console.log(error);
        process.exit(1);
    })
}