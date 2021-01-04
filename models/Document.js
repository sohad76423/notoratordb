const mongoose = require("mongoose");

const DocumentSchema = new mongoose.Schema(
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

const Document = mongoose.model("Document", DocumentSchema);
module.exports = Document;