const http = require('http');

const server = http.createServer((request,response) => {
    console.log(`request received with method: ${request.method} and url: ${request.url}`);

    if(request.method == 'POST') {
        if(request.url == '/redled/on') {
            console.log('turn on the RED LED');
        }
    }
    else if (request.method == 'GET') {
        if(request.url == '/redled') {
            console.log('status: on');
        }
    }
    response.end();

});

server.listen(4000, '0.0.0.0', () => {
    console.log('server started on port 4000');
});
