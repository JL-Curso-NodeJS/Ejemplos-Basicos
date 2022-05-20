// ejemplo API con Express

const express = require('express'); // importar express
const app = express(); // crear una instancia de express

// GET /
app.get('/', (req, res) => { // req: request, res: response
    res.send('Hola Mundo'); // envia una respuesta
});


// configura el puerto

app.listen(5000); // escucha en el puerto 5000
console.log('Servidor corriendo en el puerto 5000');


