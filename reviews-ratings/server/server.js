const express = require('express');
const BodyParser = require('body-parser');
const app = express();
const db = require('./../database/');

app.use(BodyParser.urlencoded({extended: true}));
app.use(BodyParser.json());

app.get('/reviews/id/:id', (req, res) => {
  db.getRestaurantReviews(req.params.id, (reviews) => {
    res.send(reviews);
  });
});
app.use('/:id', express.static(__dirname + './../public'));

app.listen(3002, () => {
  console.log('Port 3002 we read you loud and clear');
});