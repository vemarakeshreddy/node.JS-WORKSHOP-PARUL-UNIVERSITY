var http = require('http');
var a = 10;
var b = 20;
var c = a + b;
if(c==30){
    meg += "<br/> c is 30 ";
}else{
    meg +="c is not 30";
}
http.crestServer(function(req,res){
    res.writeHead(200,{'content-type':'text/html'});
    res.end(3000);
}).listen(3000);
console.log("Server is listening on http://127.0.0.1:3000");

