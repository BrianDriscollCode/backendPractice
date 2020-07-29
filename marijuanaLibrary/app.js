const express = require('express');
const app = express();

const request = require('request');
const fs = require('fs');
const fetch = require('node-fetch');

app.use(express.json());
app.use(express.static('public'));
app.use(express.static('javaScript'));

app.listen(3000, () => console.log('Strain launch Go!'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('main');
});
