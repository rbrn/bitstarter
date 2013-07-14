var express = require('express');

var app = express.createServer(express.logger());
var fs = require('fs');


app.get('/', function(request, response) {
  //response.send('Hello World 2!');
  
	fs.readFileSync('index.html', function(err, data) {
		if(err) return send404(response);	
		response.writeHead(200, {'Content-Type': 'text/plain'});
		response.write(data.toString('utf-8'), 'utf8');
		res.end();
	});		
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});


send404 = function(res) {
        res.writeHead(404);
	res.write('404');
	res.end();
};
