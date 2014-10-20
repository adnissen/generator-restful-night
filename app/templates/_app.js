var express = require('express'),
    mongoskin = require('mongoskin'),
    bodyParser = require('body-parser')

var app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

var db = mongoskin.db('mongodb://@localhost:27017/test', {safe:true});
//There's no collection set, so don't forget to do db.collection() whenever you're making calls to mongo!
app.get('/', function(req, res) {
    res.send('This is your index route. You might not need to do anything here');
});

app.set('port', (process.env.PORT || 3000))
app.listen(app.get('port'), function() {
      console.log("Node app is running at localhost:" + app.get('port'))
});
