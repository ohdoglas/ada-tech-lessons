const http = require('http');

const server = http.createServer((request, response) => {
    const { method, statusCode, url } = request;

    if (url === '/') {
        response.write("<div><h1>Hello from NODE</h1></div>");
        response.end();
    }
});

server.listen(3000, 'localhost', () => {
    console.log("Sever running on http://localhost:3000")
});