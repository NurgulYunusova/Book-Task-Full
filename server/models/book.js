const { default: mongoose } = require("mongoose");

function baseUrl(v) {
  return "http://localhost:3300/" + v;
}

const bookSchema = new mongoose.Schema({
  name: String,
  description: String,
  publishDate: Date,
  imagePath: { type: String, get: baseUrl },
  writer: { type: mongoose.Schema.Types.ObjectId, ref: "Writer" },
  addDate: {
    type: Date,
    default: Date.now,
  },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = {
  Book,
};
