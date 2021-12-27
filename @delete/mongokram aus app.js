// const url =
//   'mongodb+srv://dbUser:' +
//   process.env.MONGO_PW +
//   '@cluster0.dq3y7.mongodb.net/' +
//   process.env.MONGO_DB;

// mongoose
//   .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
//   .catch((err) => {
//     console.error('😱Something went wrong: ' + err);
//   });

// ==========================================================================
// Blogposts
// ==========================================================================

// const blogpostSchema = mongoose.Schema({
//   name: String,
//   longName: String,
//   coords: { lat: Number, lng: Number },
//   title: String,
//   description: String,
//   rating: String,
//   month: String,
//   year: String,
//   image1URL: String,
//   image2URL: String,
//   wiki: String,
//   utcOffset: Number,
//   authorID: String,
//   author: String,
//   authorPic: String,
// });

// const Blogpost = mongoose.model('Blogpost', blogpostSchema);
