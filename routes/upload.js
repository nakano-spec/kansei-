var express = require('express');
const { rename } = require('fs-extra');
var multer  = require('multer');
var storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,'./public/images')
    },
    filename: function(req,file,cb){
        cb(null,file.originalname)
    }
})

var upload = multer({ storage: storage});
var router = express.Router();


router.post('/', upload.array('file'), function(req, res, next) {
  console.log(req.file);
  console.log(req.body);
  res.send('upload success');
});

module.exports = router;