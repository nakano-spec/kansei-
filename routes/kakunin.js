var express = require('express');
var router = express.Router();

/*const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "20010426",
    database: "mydb"
});
connection.connect();*/

/* GET users listing. */
router.get('/', function(req, res, next) {
   var data1 = req.query.data
   var app = req.app;
   var poolCluster = app.get("pool");
   var pool = poolCluster.of('MASTER')
   var sql4 = "select m.name,m.mondaibun,m.sen1,m.sen2,m.sen3,m.sen4,s.seikai,m.picturename,m.kai_ID from mondai_LIST m,seikai_LIST s where name = ? and m.seikai_ID = s.seikai_ID and m.mon_ID = s.mon_ID;"
   pool.getConnection(function(err,connection){
    connection.query(sql4,data1,(err,result,fields) =>{
        if(err){
            console.log(err);
        }
        if(result[0].kai_ID == 1){
            res.render('kakunin2.ejs',{data:result});
        }else{
            res.render('kakunin.ejs',{data:result});
        }
        connection.release();
   })

})
});

module.exports = router;