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

function getArrayUpload(fieldname){
  return multer({storage, fileFilter, limits}).array(fieldname);
}

module.exports = {getUpload, getArrayUpload};
