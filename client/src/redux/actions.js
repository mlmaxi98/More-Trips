import { GET_COUNTRIES, GET_IDCOUNTRY, GET_COUNTRY, GET_NAME_COUNTRY, LINK } from './consts'
import axios from 'axios'
export const getCountries = () => {
    return async (dispatch) => {
        const { data } = await axios.get(`${LINK}/countries`)
        dispatch({
            type: GET_COUNTRIES, payload: data.map(country => {
                return {
                    name: country.name,
                    flag: country.flag,
                    region: country.region,
                    alpha3Code: country.id,
                    activities: country.activities,
                    population: country.population,
                }
            })
        })
    }
}
export const getIdCountries = () => {
    return async (dispatch) => {
        const request = await axios.get(`${LINK}/countries`)
        dispatch({
            type: GET_IDCOUNTRY, payload: request.data.map(pais => {
                return {
                    name: pais.Nombre,
                    id: pais.id,
                }
            })
        })
    }
}
export const getCountry = (id) => {
    return async (dispatch) => {
        const request = await axios.get(`${LINK}/countries/${id}`)
        dispatch({ type: GET_COUNTRY, payload: request.data })
    }
}

export const getNameCountry = (name) => {
    return async (dispatch) => {
        const request = await axios.get(`${LINK}/countries?name=${name}`)
        dispatch({
            type: GET_NAME_COUNTRY, payload: request.data.map(pais => {
                return {
                    name: pais.Nombre,
                    flag: pais.Bandera,
                    region: pais.Continente,
                    alpha3Code: pais.id,
                    activities: pais.activities,
                    population: pais.Poblacion
                }
            })
        })
    }
}
export const postCountry = (formulario, paises) => {
    return async () => {
        await axios.post(`${LINK}/activity`, Object.assign(formulario, { Paises: paises }))
    }
}