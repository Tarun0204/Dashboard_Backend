const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  name: { type: String },
  imageUrl: { type: String },
  itemCount: { type: Number, default: 0 },
});

module.exports = mongoose.model("Category", categorySchema);
