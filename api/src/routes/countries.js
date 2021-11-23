const express = require('express');
const router = express.Router();
const axios = require('axios');
const { Country, Activity } = require('../db.js');
const { Op } = require('sequelize')

const urlPaises = 'https://restcountries.com/v3.1/all'


router.get('/', async ({ query }, res) => {
    const {
        //Countries
        name,
        region,
        //Activity
        activity,
        season,
        duration,
        difficult,
        //Order and Pagination
        columnOrder,
        order,
        size,
        page,

    } = query;

    try {
        const cant = await Country.count();
        if (cant === 0) {
            const { data } = await axios(urlPaises)
            const countries = [...data.slice(0, 50)]
            const countries2 = [...data.slice(50, 100)]
            const countries3 = [...data.slice(100, 200)]
            const countries4 = [...data.slice(200, data.length)]

            countries.forEach(addCountry)
            countries2.forEach(addCountry)
            countries3.forEach(addCountry)
            countries4.forEach(addCountry)
            return res.status(201).json(allCountries)
        }

        return res
            .status(200)
            .json(
                await Country.findAll({
                    where: {
                        ...(name && { name: { [Op.iLike]: `%${name}%` } }),
                        ...(region && { region: { [Op.iLike]: `%${region}%` } }),
                    },
                    include: [
                        {
                            model: Activity,
                            ...(
                                (activity || season || duration || difficult)
                                && {
                                    where: {
                                        ...(activity && {
                                            name: {
                                                [Op.iLike]: `%${activity}%`
                                            }
                                        }),
                                        ...(season && { season }),
                                        ...(duration && { duration }),
                                        ...(difficult && { difficult }),
                                    }
                                })
                        }
                    ],
                    ...(size && { limit: size }),
                    ...(page && { offset: page }),
                    order: [
                        [
                            columnOrder || 'name',
                            order || 'ASC',
                        ],
                    ],
                })
            )
    }
    catch (e) {
        return res
            .status(404)
            .send('Error buscando todos los paises: ')
    }
})

router.get('/:idCountry', async ({ params }, res) => {
    const { idCountry } = params

    if (idCountry) {
        return res
            .status(200)
            .json(
                await Country.findOne({
                    where: {
                        id: idCountry,
                    },
                    include: [Activity]
                }))
    }
    else return res
        .status(404)
        .send('No ingresaste ID')
})

const addCountry = async ({ cca3, name, flags, region, capital, subregion, area, population }) => {
    await Country.create({
        id: cca3,
        name: name.common,
        flag: flags.svg,
        region: region,
        capital: capital && capital[0] || 'Desconocido',
        subregion: subregion || 'Desconocido',
        area: area,
        population: population,
    })
}

module.exports = router