var express = require('express');
var bodyParser = require('body-parser');
var parser = bodyParser.urlencoded({extended: false});
var app = express();
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));
app.listen(3000);

app.get('/', function(req, res){
  res.render('home');
});

app.post('/xuly', parser, function(req, res){
  res.send(req.body.name)
  //TODO HERE
});
