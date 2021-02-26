const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    _id: { type: String },
    image: { type: String },
    title: { type: String },
    authors: { type: Array },
    published: { type: Date }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;