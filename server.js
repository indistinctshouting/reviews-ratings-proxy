const express = require('express');
const path = require('path');
const morgan = require('morgan');
const app = express();
const BodyParser = require('body-parser');
const axios = require('axios');

app.use(BodyParser.urlencoded({extended: true}));
app.use(BodyParser.json());
app.use(morgan('dev'));
app.use('/:id', express.static(path.join(__dirname, 'public')));

app.get('/reviews/id/:id', (req, res) => {
  axios.get(`http://localhost:3002/reviews/id/${req.params.id}`)
    .then(response => res.send(response.data))
    .catch(err => console.error(err));
});

app.get('/summary/id/:id', (req, res) => {
  axios.get(`http://localhost:3003/summary/id/${req.params.id}`)
    .then(response => res.send(response.data))
    .catch(err => console.error(err));
});

app.get('/photos/:rest_id', function(req, res) {
  axios.get(`http://localhost:3001/photos/${req.params.rest_id}`)
    .then(response => res.send(response.data))
    .catch(err => console.error(err));
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});