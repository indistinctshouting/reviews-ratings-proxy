const faker = require('faker');
const mongoose = require('mongoose');
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

const gimmeRandomNumber = (max, min = 0) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const gimmeTrueOrFalse = (trueFreq = 0.5) => {
  let randomVal = Math.random();
  if (randomVal < trueFreq) {
    return true;
  } else {
    return false;
  }
};

let reviews = [];

for (let i = 1; i <= 1000; i++) {
  let review = {
    reviewId: i, 
    restaurantId: gimmeRandomNumber(100, 1),
    rating: gimmeRandomNumber(5),
    date: faker.date.past(18),
    text: faker.lorem.paragraphs(),
    owner: { 
      picture: faker.image.avatar(),
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      location: `${faker.address.city()}, ${faker.address.stateAbbr()}`,
      friends: gimmeRandomNumber(150),
      reviewCount: gimmeRandomNumber(300),
      photos: gimmeRandomNumber(100),
      checkIns: gimmeRandomNumber(10),
      elite: gimmeTrueOrFalse(0.1)
    },
    updated: gimmeTrueOrFalse(0.1),
    upvotes: {
      useful: gimmeRandomNumber(10),
      funny: gimmeRandomNumber(10),
      cool: gimmeRandomNumber(10)
    }
  };
  reviews.push(review);
}

Review.insertMany(reviews);

module.exports.reviews = reviews;