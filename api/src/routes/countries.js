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

        const countries = await Country.findAndCountAll({
            ...(
                (name || region)
                && {
                    where: {
                        ...(name && { name: { [Op.iLike]: `%${name}%` } }),
                        ...(region && { region: { [Op.iLike]: `%${region}%` } }),
                    }
                }),
            ...(size && { limit: size }),
            ...(page && { offset: page * size }),
            include: [
                {
                    model: Activity,
                    ...(
                        (activity
                            || season
                            || duration
                            || difficult)
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

            order: [
                [
                    columnOrder || 'name',
                    order || 'ASC',
                ],
            ],
        })


        return res
            .status(200)
            .json({
                ...countries,
                page: parseInt(page),
                nextPage: Boolean(countries.count > ((parseInt(page) + 1) * size))
            })
    }
    catch (e) {
        return res
            .status(404)
            .send('Error buscando todos los paises: ')
    }
})

router.get('/:id', async ({ params }, res) => {
    const { id } = params
    try {

        if (id) {
            return res
                .status(200)
                .json(
                    await Country.findOne({
                        where: {
                            id
                        },
                        include: [Activity]
                    }))
        }
        else return res
            .status(404)
            .send('No ingresaste ID')

    } catch (error) {
        return res
            .status(404)
            .send('Hubo un error: ' + error.message)
    }
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