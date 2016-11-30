var express = require('express');
var bodyParser = require('body-parser');
var parser = bodyParser.urlencoded({extended: false});

var multer = require('multer');
var storage = multer.diskStorage({
  destination: function(req, file, cb){
    if(file.fieldname=="avatar"){
      cb(null, "./public/images/hinhdaidien");
    }else{
      cb(null, "./public/images/hinhsanpham");
    }
  },
  filename: function(req, file, cb){
    cb(null, Date.now() + file.originalname);
  }
});

function fileFilter(req, file, cb){
  if(file.mimetype=="image/jpeg"){
    cb(null, true);
  }else{
    cb(new Error("Sai dinh dang file"));
  }
}

var limits = {
  fileSize: 1024*20
}

// var upload = multer({storage, fileFilter, limits}).single('avatar');

function getUpload(fieldname){
  return multer({storage, fileFilter, limits}).single(fieldname);
}

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
      res.send('Thanh cong');
    }
  });
});
