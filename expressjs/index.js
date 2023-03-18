require('colors');
const express = require('express');

const server = express();
server.get('/', (req, res) => {
    res.send('<h1>Hola Mundo con Express y Node.js</h1>');
    res.end();
});
server.listen(3000, () => {
    console.log('Server on port 3000'.red);
});