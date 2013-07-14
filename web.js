var express = require('express');

var app = express.createServer(express.logger());
var fs = require('fs');


app.get('/', function(request, response) {
  //response.send('Hello World 2!');
  
	var file = fs.readFileSync('index.html');	
	response.writeHead(200, {'Content-Type': 'text/html'});
	response.write(file.toString('utf-8'));
	res.end();
		
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});

