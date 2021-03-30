var express = require('express');
var router = express.Router();
const axios = require('axios');
const { Country, Activity } = require('../db.js');
const { Op } = require('sequelize');
const LinkAll = 'https://restcountries.eu/rest/v2/all'

router.get('/:idPais', async (req, res) => {
    var { idPais } = req.params

    idPais ? res.status(200).json(
        await Country.findOne({
            where: {
                id: idPais,
            }
            ,
            include: [Activity]
        }))
        : res.status(404).send('No ingresaste ID')
})

//!GET para buscar por Name, o sin Name/ID
router.get('/', async (req, res) => {
    var { name } = req.query;
    if (name) {
        try {
            return res.status(200).json(
                await Country.findAll({
                    where: { Nombre: { [Op.iLike]: `%${name}%` } }
                    ,
                    include: [Activity]
                })
            )
        }
        catch {
            res.status(404).send('Error buscando por name')
        }
    }
    else {
        try {
            const cant = await Country.count();
            if (cant === 0) {
                const Paises = await axios.get(LinkAll)
                Paises.data.forEach(async (pais) => {
                    await Country.findOrCreate({
                        where: {
                            id: pais.alpha3Code,
                            Nombre: pais.name,
                            Bandera: pais.flag,
                            Continente: pais.region,
                            Capital: pais.capital,
                            Subregion: pais.subregion,
                            Area: pais.area,
                            Poblacion: pais.population,
                        }
                    })
                })
                res.status(201).json(
                    await Country.findAll({ include: [Activity] })
                )
            }
            else res.status(200).json(
                await Country.findAll({ include: [Activity] })
            )
        }
        catch (e) { res.status(404).send('Error buscando todos los paises') }
    }
})

module.exports = router