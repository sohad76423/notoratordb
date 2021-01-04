
const { Document } = require("../models");

exports.getAllDocuments = async function (req, res) {
const all = await Document.find().limit(10);
res.json(all);
};

exports.getDocumentById = async function (req, res) {
const { id } = req.params;
const single = await Document.findOne({ id: Number(id) });
if (!single) {
    return res.status(404).send("Document with this ID does not exist");
}
res.json(single);
};

exports.createDocument = async function (req, res) {
    const newDocument = await Document.create(req.body);
    res.json(newDocument);
};

exports.updateDocument = async (req, res) => {
    const { title, body, img } = req.body;
    const { id } = req.params;
    const result = await Document.findByIdAndUpdate(id, req.body, {new:true})
    res.json({ success: true, result });
}

exports.deleteDocument = async(req, res) => {
    const { id } = req.params;
    const result = await Document.findByIdAndDelete()
    res.sendStatus("204");
};
