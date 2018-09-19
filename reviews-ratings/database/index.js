const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fec');
mongoose.connection.on('error', console.error.bind(console, 'connection error'));
mongoose.connection.once('open', () => {
  console.log('CONNECTED');
});

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
  console.log(id);
  Review.find({restaurantId: id}, (err, reviews) => {
    callback(reviews);
  });
};

module.exports.getRestaurantReviews = getRestaurantReviews;