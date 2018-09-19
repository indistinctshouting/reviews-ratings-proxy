const express = require('express');
const app = express();
const dbMethods = require('../database/index.js');
const bodyParser = require('body-parser');
const path = require('path');


app.use('/:rest_id', express.static(__dirname + './../public/'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/photos/:rest_id', function(req, res) {
  dbMethods.getPhotos(req.params.rest_id, function(err, data) {
    if (err) {
      res.sendStatus(503);
    } else {
      res.send(data);
    }
  });
});

// app.post('/photos', function(req, res) {
//   dbMethods.insertInfo(function(err, data) {
//     if(err) {
//       console.log(err)
//     } else {
//       console.log('successful post')
//     }
//   })
// })

app.listen(3000, () => console.log('listening on port 3000!'));
