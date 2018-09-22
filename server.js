const express = require('express');
const path = require('path');
const morgan = require('morgan');
const app = express();
const BodyParser = require('body-parser');
const axios = require('axios');
const reviewsURL = 'http://18.223.122.135:3002';
const sidebarURL = 'http://yelp-proxy.m6wavsvivn.us-west-2.elasticbeanstalk.com/';


app.use(BodyParser.urlencoded({extended: true}));
app.use(BodyParser.json());
app.use(morgan('dev'));
app.use('/:id', express.static(path.join(__dirname, 'public')));

app.get('/reviews/id/:id', (req, res) => {
  res.redirect(reviewsURL + `/reviews/id/${req.params.id}`);
});

app.get('/summary/id/:id', (req, res) => {
  axios.get(sidebarURL + `/summary/id/${req.params.id}`);
});

app.get('/photos/:rest_id', function(req, res) {
  axios.get(`http://localhost:3001/photos/${req.params.rest_id}`)
    .then(response => res.send(response.data))
    .catch(err => console.error(err));
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});