/* ENTRY POINT */

const express = require('express');
const app = express();

// /* Requerimos la dependencia dotenv */
require('dotenv').config();
// /* Leemos la constante del Port */
const PORT = process.env.DBPORT;

// /* Import de las rutas */
const mainRoutes = require('./src/routes/mainRoutes')
const shopRoutes = require('./src/routes/shopRoutes');

// /* Define carpeta de archivos estáticos */
app.use(express.static('public'));

/* Parsea los datos recibidos por POST */
app.use(express.urlencoded());
app.use(express.json());

// /* Middleware a las Rutas */
app.use('/', mainRoutes);
// app.use('/', shopRoutes);

// /* Middleware para manejar el error 404 */
app.use((req, res, next) => {
    res.status(404).sendFile(__dirname+'/public/pages/404.html');
});

/* Método para correr el server */
app.listen(PORT, () => console.log(`Escucho el puerto ${PORT}`));