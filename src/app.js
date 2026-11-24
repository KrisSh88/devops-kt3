const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        res.end('KT3 App');
    } else if (req.url === '/health') {
        res.writeHead(200, {
            'Content-Type': 'application/json'
        });
        res.end(JSON.stringify({
            status: 'ok'
        }));
    } else {
        res.writeHead(404);
        res.end('Not Found');
    }
});

if (require.main === module) {
    server.listen(3000, () => {
        console.log('Server running on port 3000');
    });
}

module.exports = server;
