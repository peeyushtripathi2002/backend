//log maintain
const http = require('http');
const fs = require('fs');
const url = require("url");

const myServer = http.createServer((req, res) => {
    // console.log("New Request Received");

    const log = `\n${Date.now()} ${req.method} ${req.url}  new Request Received  for  \n`;
    const myUrl = url.parse(req.url, true); //http://localhost:8000/about?userName=Aryan&userId=1&location=Bhopal

    console.log(myUrl);
    fs.appendFile("log.txt", log, (err, data) => {

            switch (myUrl.pathname) {
                case "/":
                    if (req.method === 'GET') {
                        res.end("Home page");
                    }

                    break;
                case "/about":
                    res.end("About page");
                    break;
                case "/contact":
                    res.end("Contact page");
                    break;
                case "/search":
                    const search = myUrl.query.search_query
                    res.end("here is your search " + search); //localhost:8000/search?search_query=javascript+promises+.then+.catch
                    break;
                case "/signup":
                    if (req.method === 'GET') res.end("this is form component")
                    if (req.method === 'Post') {
                        res.end("succes")
                    }
                    break;
                default:
                    res.end("Hello From the Server, 404 not found");


            }


        })
        // console.log(request)
        // console.log(request.headers)

})

myServer.listen(5000, () => {
    console.log("Server started");
})