
const { Asset } = require("../models");

exports.getAllAssets = async function (req, res) {
const all = await Asset.find().limit(10);
res.json(all);
};

exports.getAssetById = async function (req, res) {
const { id } = req.params;
const single = await Asset.findOne({ id: Number(id) });
if (!single) {
    return res.status(404).send("Asset with this ID does not exist");
}
res.json(single);
};

exports.createAsset = async function (req, res) {
    const newAsset = await Asset.create(req.body);
    res.json(newAsset);
};

exports.updateAsset = async (req, res) => {
    const { title, body, img } = req.body;
    const { id } = req.params;
    const result = await Asset.findByIdAndUpdate(id, req.body, {new:true})
    res.json({ success: true, result });
}

exports.deleteAsset = async(req, res) => {
    const { id } = req.params;
    const result = await Asset.findByIdAndDelete()
    res.sendStatus("204");
};
