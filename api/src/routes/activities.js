const express = require('express');
const router = express.Router();
const { Country, Activity } = require('../db.js');

router.post('/', async ({ body }, res) => {

    try {
        addActivity(body)
        return res
            .status(201)
            .send('Actividad correctamente!')
    } catch (error) {
        return res
            .status(404)
            .send('Error al agregar actividad')
    }
})


const addActivity = async ({ name,
    difficult,
    duration,
    season,
    countries }) => {
    const activity = await Activity.create({
        name,
        difficult,
        duration,
        season,
    })
    countries.forEach(async country => {
        const countryId = await Country.findOne({
            where: { id: country }
        })
        await activity.addCountry(countryId)
    })

}

module.exports = router