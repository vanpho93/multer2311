var express = require('express');
var bodyParser = require('body-parser');
var parser = bodyParser.urlencoded({extended: false});

var multer = require('multer');
var storage1 = multer.diskStorage({
  destination: function(req, file, cb){
    cb(null, "./public/images");
  },
  filename: function(req, file, cb){
    cb(null, ''+Date.now()+'.png');
  }
});

var upload = multer({storage: storage1});

var app = express();
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));
app.listen(3000);

app.get('/', function(req, res){
  res.render('home');
});

app.post('/xuly', upload.single('avatar'), function(req, res){
  //TODO HERE
  res.send(req.body.name)
});
