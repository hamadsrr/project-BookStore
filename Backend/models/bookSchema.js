const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema= new Schema({
    bookId: Number,
    title: String,
    wrater: String,
    price: Number,
    qty: Number,
    img: String,
})

const Books = mongoose.model("Books", BookSchema)
module.exports= {Books}