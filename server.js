const express = require('express');
const app = express();

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://user:<password>@cluster0.zzpbu.mongodb.net/<dbname>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("main").collection("devices");
  // perform actions on the collection object
  client.close();
});

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file
app.use(express.static('public'))
// login page
app.get('/', function(req, res) {
    res.render('pages/index');
});
// about page
app.get('/at', function(req, res) {
    res.render('pages/AT');
});
// about page
app.get('/d', function(req, res) {
    res.render('pages/d');
});
// about page
app.get('/p', function(req, res) {
    res.render('pages/p');
});
// about page
app.get('/s', function(req, res) {
    res.render('pages/s');
});
// about page
app.get('/pd', function(req, res) {
    res.render('pages/pd');
});

app.listen(3000);
console.log('3000 is the magic port');