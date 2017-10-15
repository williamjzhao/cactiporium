var express = require('express');
var app = express();
/*moves files onto a server*/
app.use('/static', express.static('public'))

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
})

var currentUser = '';
app.post('/setUser', function(req,res){
    currentUser = req.params;
    console.log(currentUser);
    res.send("ok");
})
app.get('/getUser', function(req,res){
    res.send(currentUser);
    console.log(currentUser);
})
