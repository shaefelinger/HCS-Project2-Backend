const mongoose = require('mongoose');

const blogpostSchema = mongoose.Schema({
  name: String,
  longName: String,
  coords: { lat: Number, lng: Number },
  title: String,
  description: String,
  rating: String,
  month: String,
  year: String,
  image1URL: String,
  image2URL: String,
  wiki: String,
  utcOffset: Number,
  authorID: String,
  author: String,
  authorPic: String,
});

module.exports = mongoose.model('Blogpost', blogpostSchema);
