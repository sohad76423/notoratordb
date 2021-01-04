const mongoose = require("mongoose");

const AssetSchema = new mongoose.Schema(
    {
    name: {
        first: String,
        last: String,
    },
    username: String,
    email: String,
    author: String,
    tags: [ String ],
    published: {type: Boolean, default: true},
    quantity: Number,
    price: Number,
    },
    { timestamps: true }
);

const Asset = mongoose.model("Asset", AssetSchema);
module.exports = Asset;