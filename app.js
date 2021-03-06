require('dotenv').config();


const express = require('express');
// const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();


// app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

const port = process.env.PORT || 3000

const url = process.env.MONGO_URL;

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });


// const articleSchema = mongoose.Schema({
//   title: String,
//   content: String,
// });

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
  utc_offset: Number,
  authorID: String
});

// const Article = mongoose.model('Article', articleSchema);
const Blogpost = mongoose.model('Blogpost', blogpostSchema);



app
  .route('/blogposts')
  .get((req, res) => {
    Blogpost.find((err, foundBlogposts) => {
      console.log('GET all');
      if (!err) {
        res.send(foundBlogposts);
      } else {
        res.send(err);
      }
    });
  })
  .post((req, res) => {
    console.log('POST new blogpost');
    const newBlogpost = new Blogpost({
      name: req.body.name,
      longName: req.body.longName,
      title: req.body.title,
      description: req.body.description,
    });
    console.log(req.body);  
    newBlogpost.save((err) => {
      if (!err) {
        res.send('Succesfully added a new post: ' + newBlogpost.name );
      } else {
        res.send(err);
      }
    });
  })
  .delete((req, res) => {
    console.log('DELETE all');
    Blogpost.deleteMany((err) => {
      if (!err) {
        res.send('Successfully deleted ALL blogposts.');
      } else {
        res.send(err);
      }
    });
  });

///////////////////// request for a specific blogpost

app.route('/blogposts/:blogpostID')
  .get((req, res) => {
    console.log('GET one post');
    Blogpost.findOne(
      {_id: req.params.blogpostID}, (err, foundBlogpost) => {
        if(foundBlogpost) {  
          res.send(foundBlogpost);
        } else {
          res.send("No Blogpost found");
        }
      }
    )
  })

  .put((req, res) => {
    console.log('PUT');
    Blogpost.update(
      {_id: req.params.blogpostID},
      {title: req.body.title, content: req.body.content},
      {overwrite: true},
      (err, results) => {
        if(!err) {
          res.send(results);
        } else {
          res.send(err)
        }
      }
    )
  })

  .patch((req,res) => {
    console.log('PATCH');
    Blogpost.update(
      {_id: req.params.blogpostID},
      {$set: req.body},
      (err, results) => {
        if(!err) {
          res.send(results);
        } else {
          res.send(err)
        }
      }
    )
  })
  .delete((req, res) => {
    Blogpost.deleteOne(
      {_id: req.params.blogpostID},
      (err) => {
        if(!err) {
          res.send("🚫successfully deleted");
        } else {
          res.send(err)
        }
      })
  });



app.get('/', (req, res) => {
  res.send('Server is working');
});  

app.listen(port, () => {
  console.log('👍 Server started on port' + port);
});
