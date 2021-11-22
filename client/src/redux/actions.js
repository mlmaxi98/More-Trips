import axios from 'axios'
import { GET_COUNTRIES, GET_IDCOUNTRY, GET_COUNTRY, GET_NAME_COUNTRY, LINK } from './consts'

export const getCountries = () => {
    return async (dispatch) => {
        const { data } = await axios.get(`${LINK}/countries`)
        dispatch({
            type: GET_COUNTRIES,
            payload: data
        })
    }
}

export const getIdCountries = () => {
    return async (dispatch) => {
        const { data } = await axios.get(`${LINK}/countries`)
        dispatch({
            type: GET_IDCOUNTRY,
            payload: data
        })
    }
}

export const getCountry = (id) => {
    return async (dispatch) => {
        const { data } = await axios.get(`${LINK}/countries/${id}`)
        dispatch({
            type: GET_COUNTRY,
            payload: data
        })
    }
}

export const getNameCountry = (name) => {
    return async (dispatch) => {
        const { data } = await axios.get(`${LINK}/countries?name=${name}`)
        dispatch({
            type: GET_NAME_COUNTRY,
            payload: data
        })
    }
}

export const postCountry = (body, countries) => {
    return async () => {
        await axios.post(`${LINK}/activity`, { ...body, countries })
    }
}