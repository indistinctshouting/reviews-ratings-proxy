const express = require('express');
const path = require('path');
const morgan = require('morgan');
const app = express();
const mongoose = require('mongoose');
const BodyParser = require('body-parser');

app.use(BodyParser.urlencoded({extended: true}));
app.use(BodyParser.json());
app.use(morgan('dev'));
app.use('/:id', express.static(path.join(__dirname, 'public')));

mongoose.connect('mongodb://localhost/fec');

const reviewSchema = new mongoose.Schema({
  reviewId: Number, 
  restaurantId: Number,
  rating: Number,
  date: Date,
  text: String,
  owner: {
    picture: String,
    name: String,
    location: String,
    friends: Number,
    reviewCount: Number,
    photos: Number,
    checkIns: Number,
    elite: Boolean
  },
  updated: Boolean,
  upvotes: {
    useful: Number,
    funny: Number,
    cool: Number
  }
});

const Review = mongoose.model('Review', reviewSchema);

const getRestaurantReviews = (id, callback) => {
  Review.find({restaurantId: id}, (err, reviews) => {
    callback(reviews);
  });
};

app.get('/reviews/id/:id', (req, res) => {
  getRestaurantReviews(req.params.id, (reviews) => {
    res.send(reviews);
  });
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});