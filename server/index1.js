const http = require('http');
const myServer = http.createServer((request, response) => {
    console.log("New Request Received");
    console.log(request)
    console.log(request.headers)
    response.end("Hello from the server")
})

myServer.listen(8000, () => {
    console.log("Server started");
})