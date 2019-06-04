//const sslRedirect = require('heroku-ssl-redirect');
const express = require('express');
const app = express();
const path = require('path');
const MongoClient = require('mongodb').MongoClient;
const Parser        = require('rss-parser');
const parser        = new Parser();
const RSStoMongo = require('rss-node-mongo');
const feedURL = "https://www.google.com/alerts/feeds/13505578085637347686/";

const db = require('./config/keys').mongoURI;

MongoClient.connect(db, {useNewUrlParser: true}, function (err, client) {
    if (err) throw err;
mongodb = client.db('wrestling');
console.log("Wrestling database is flowing");
})

//enable ssl redirect
//app.use(sslRedirect());

function getParsed() {

const college = 
{
    "rss": `${feedURL}1390917818166769034`,
    "db": db,
    "collection": "college"
}

const rssCollege = new RSStoMongo(college)

rssCollege.work(function (err, success) {
    if (!err) {
        console.log(success.saved + " College wrestling items were inserted")
    } else {
        console.log(err)
    }
})

const ncaa = 
{
    "rss": `${feedURL}993106154031868608`,
    "db": db,
    "collection":"ncaa"
}

const rssNcaa = new RSStoMongo(ncaa)

rssNcaa.work(function (err, success) {
    if(!err) {
        console.log(success.saved + " NCAA wrestling related items were inserted")
    } else {
        console.log(err)
    }
})

const general =
{
    "rss": `${feedURL}11688098168878960672`,
    "db": db,
    "collection": "general"
}

const rssGeneral = new RSStoMongo(general)

rssGeneral.work(function (err, success) {
    if (!err) {
        console.log(success.saved + " General non WWF :-) wrestling items were inserted")
    } else {
        console.log(err)
    }
})
console.log("I've been parsed");
};

//2.4 hours ? or 3.4 hours
//setInterval(getParsed, 8888888)

setInterval(getParsed, 5400000)

app.use(express.static(__dirname + '/public'));


const port = process.env.PORT || 5000;

//default route
app.get('/rss', function (req, res){
   
    const URL = 'https://www.google.com/alerts/feeds/13505578085637347686/1390917818166769034';
    parser.parseURL(URL, function (err, parsed){
        if(err){
          console.log("Unable to parse");
        }  else {
            res.json(parsed);
               }
        });
   });


   app.get('/news/:id', (req, res) => {
    mongodb.collection(`${req.params.id}`).find().limit(18).sort({$natural : -1}).toArray((err, result) => {
      if (err) return console.log(err)
      res.json(result);
     })
  });

  
// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, 'client/build')))
// Anything that doesn't match the above, send back index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'))
})


app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
})