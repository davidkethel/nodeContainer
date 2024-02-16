const express = require("express")
var app = express()

app.get("/", function(request, response){
    response.send("Hello World Yeah")
})

app.listen(1000, function(){
    console.log("Started applicaton on port %d", 1000)
});