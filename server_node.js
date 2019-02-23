var http = require('http');
var server = http.createServer();
//now create a listerner who responds on request
server.on("request", (req,res) => {
    //parse request body and headers
    var body = [];
    req.on("data",chunk => {
        body.push(chunk);
    });
    req.on("end", () => {
        body = body.concat.toString();
        //'end' event is raised once per request 
    });
    req.on("error",() => {
        res.statusCode=400;
        res.end();
    });
    res.on("error",err => {
        consol.err(err);
    });
   // res.write("Hello Hell");
    res.end();
});

server.listen(8008,() => {
    console.log("Server started on 8008");
});