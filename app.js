var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var useragent = require('express-useragent')
var app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(useragent.express());

var url = "/api/whoami"

app.get(url,function(request,response,next){

    var language = request.acceptsLanguages(); 
    var software = "OS:" + request.useragent.os + ", Browser:" + request.useragent.browser;
    var ip = request.ip;
    
    
    
    response.json({ip:ip,language:language[0],Software:software});
    
})




app.listen(3000,function(){
    console.log("Server is running on port 3000....");
})