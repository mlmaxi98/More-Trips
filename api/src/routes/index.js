const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const countries = require('./countries')
const activity = require('./activities')

const app = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

//Para acceder a las rutas de Country
app.use('/countries', countries)

//Para acceder a las rutas de Activity
app.use('/activities', activity)


module.exports = app;