var express = require('express');
var bodyParser = require('body-parser');
var parser = bodyParser.urlencoded({extended: false});
var getUpload = require('./upload.js').getUpload;


var app = express();
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));
app.listen(3000);

app.get('/', function(req, res){
  res.render('home');
});

app.post('/xulydangky', function(req, res){
  //TODO HERE
  getUpload('avatar')(req, res, function(err){
    if(err){
      res.send('LOI: ' + err);
    }else{
      res.send('Thanh cong')
    }
  });
});

app.post('/xulydangtin', function(req, res){
  //TODO HERE
  getUpload("hinhsanpham")(req, res, function(err){
    if(err){
      res.send(''+err);
    }else{
      res.send('Thanh cong' + JSON.stringify(req.file));
    }
  });
});

app.post('/xuly', function(req, res){
  getArrayUpload("hinhsanpham")(req, res, function(err){
    if(err){
      res.send(''+err);
    }else{
      res.send('Thanh cong'+ JSON.stringify(req.files));
    }
  })
});
