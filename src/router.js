var express = require('express');
var app = express();
var jwt = require('express-jwt');

var jwtCheck = jwt({
  secret: new Buffer('OvS45Uziw_VVvvloByHPOrV7VOZsA2HvCFHQ0QT6i90Q4PHQbnnxlxQ3wLC1MU-A', 'base64'),
  audience: '21jAUBEJTwMKB1GiY5p28cteIqeNBCf0'
});
app.use('/ank', jwtCheck,function(req,res){
res.send("logged in")

});



app.get("/meg",function(req,res){

  res.send("checked")
})

app.listen(3000, 'localhost', function (err) {
   if (err) {
     return console.error(err);
   }
   console.log('Listening at http://localhost:3000');
 });
