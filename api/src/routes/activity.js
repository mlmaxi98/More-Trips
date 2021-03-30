var express = require('express');
var router = express.Router();
const axios = require('axios');
const { Country, Activity } = require('../db.js');
const { Sequelize, Op } = require('sequelize');

router.post('/', async (req, res) => {
    var { Nombre, Dificultad, Duracion, Temporada, Paises } = req.body;

    let actividad = await Activity.create({
        Nombre,
        Dificultad,
        Duracion,
        Temporada
    })
    Paises.forEach(async (pais) => {
        let country = await Country.findOne({
            where: { id: pais }
        })
        await actividad.addCountry(country)
    })
    res.status(201).send('Actividad correctamente!')
})

module.exports = router