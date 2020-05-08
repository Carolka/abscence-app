/**
 * Created by caroline on 01.05.20.
 */

const express = require('express');

const  app  = express();

app.get('/', function (req, res) {
  res.send('<html><body><h1>Hello World</h1></body></html>');
});

app.post('/submit-data', function (req, res) {
  res.send('POST Request');
});

app.put('/update-data', function (req, res) {
  res.send('PUT Request');
});

app.delete('/delete-data', function (req, res) {
  res.send('DELETE Request');
});

var server = app.listen(8000, function () {
  console.log('Node server is running..');
});
