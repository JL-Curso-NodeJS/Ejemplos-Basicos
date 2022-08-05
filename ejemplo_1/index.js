// CREA UN SERVIDOR HTTP Y UN CLIENTE HTTP

var http = require('http'); // importa el modulo http

http.createServer(function(req, res) { // crea un servidor http
    res.writeHead(200, {'Content-Type': 'text/html'}); // establece el tipo de contenido
    res.end('<h1>Hola mundo</h1>'); // escribe el contenido
}).listen(5000); // escucha en el puerto 5000

console.log('Servidor ejemplo_1 corriendo en http://localhost:5000'); // muestra un mensaje en la consola

// PARA EJECUTARLO COMANDO: npm start