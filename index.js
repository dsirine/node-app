//importing node framework
var express = require('express');
 
var app = express();
//Respond with "Bonjour" for requests that hit our root "/"
app.get('/', function (req, res) {
 res.send('Bonjour');
});
//listen to port 3000 by default
app.listen(process.env.PORT || 4000);
 
module.exports = app;