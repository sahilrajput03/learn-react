const mongoose = require("mongoose");

//below line could be" new mongoose.Schema "
const blogSchema = mongoose.Schema({
  title: String,
  author: String,
  url: String,
  likes: Number,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

blogSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
    if (typeof returnedObject.likes === "undefined") {
      returnedObject.likes = 0;
    }
  }
});
module.exports = mongoose.model("Blog", blogSchema);
