const os = require('os');

console.log(os.platform());
console.log(os.release());
console.log('free', os.freemem(), 'b');
console.log('total', os.totalmem(), 'b');

const fs = require('fs');

fs.writeFile('./texto.txt', 'linea uno', function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('Archivo creado');
    }
});

console.log('Ultima linea de codigo');

fs.readFile('./texto.txt', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data.toString());
    }
});