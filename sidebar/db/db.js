const mongoose = require('mongoose');
const key = require('./MONGOOSE_KEY');

const connection = mongoose.createConnection(key.MONGOOSE_KEY, {useNewUrlParser: true});

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
 
const RestaurantInfo = new Schema({
  info_ID: ObjectId,
  restaurant_name: String,
  restaurant_ID: Number,
  price_range: String,
  health_score: String,
  menu: Schema.Types.Mixed,
  hours: {
    Mon: String,
    Tue: String,
    Wed: String,
    Thu: String,
    Fri: String,
    Sat: String,
    Sun: String,
  },
});

const findOneRestaurant = (restID, callback) => {
  let dataModel = connection.model('Info', RestaurantInfo);
  let query = dataModel.findOne({'restaurant_ID': restID});
  query.exec(callback);
}

module.exports = {
  connection,
  RestaurantInfo,
  ObjectId,
  findOneRestaurant,
};
