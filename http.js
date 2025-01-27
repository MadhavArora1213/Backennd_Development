const http = require('http');


// create server and handle routing at backend
const server = http.createServer((req, res) => {
    if(req.url === '/') {
        return res.end("Hello World");
    }
    if(req.url === '/about') {
        return res.end("About Page");
    }
    if(req.url === '/contact') {
        return res.end("Contact Page");
    }
    
    return res.end("404 Page Not Found");
}); 

const PORT = 5000; // port number whre server run

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});