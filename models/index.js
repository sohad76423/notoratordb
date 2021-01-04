require("dotenv").config();
const mongoose = require("mongoose");
const Asset = require("./Asset")
const Document = require("./Document")
const User = require("./user");
const connectDB = () => {
  return mongoose.connect(process.env.CONNECTION_URI);
};

exports.connectDB = connectDB;
exports.User = User;

exports.Asset = Asset;
exports.Document = Document;