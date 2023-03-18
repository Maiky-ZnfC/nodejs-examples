const http = require('http');
const url = require('url');
require('colors');

const handleServer = function (req, res) {
    res.writeHead(200, {
        'content-type': 'text/html'
    });
    res.write('<h1>Hola Mundo desde Node.js</h1>');
    res.write(req.url);
    res.write('<br>');
    const q = url.parse(req.url, true).query;
    const txt = q.year + ' ' + q.month;
    res.end(txt);
};

const server = http.createServer(handleServer);
server.listen(3000, function () {
    console.log('Server on port 3000'.green);
});