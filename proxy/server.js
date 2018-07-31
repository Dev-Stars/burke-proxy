const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
const request = require('request');
const bodyParser = require('body-parser');

app.use(morgan('dev'));

app.use(bodyParser.json());


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(function (request, res, next) {
  console.log(request.method, request.path);
  next();
});

let getReviewsByNumber = function(id, callback) {
  console.log('inside getReviewsByNumber');
  let myURL = `/locations/${locID}/reviews`;
  let options = {
    url: myURL,
    headers: {
      contentType: 'application/json',
    },
  }
  request.get(options, callback);
}



app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
