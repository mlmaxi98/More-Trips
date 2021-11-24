import { AZ } from '../utils/ordering'
import axios from 'axios'

//Consts
const url = 'https://dbcountries.herokuapp.com'

const GET_COUNTRIES = 'GET_COUNTRIES'
const GET_COUNTRIES_SUCCESS = 'GET_COUNTRIES_SUCCESS'
const GET_COUNTRIES_ERROR = 'GET_COUNTRIES_ERROR'

const GET_COUNTRY = 'GET_COUNTRY'
const GET_IDCOUNTRY = 'GET_IDCOUNTRY'
const GET_NAME_COUNTRY = 'GET_NAME_IDCOUNTRY'


const initialState = {
    loading: false,
    countries: [],
    country: {},
}

export function rootReducer(state = initialState, action) {

    switch (action.type) {

        case GET_COUNTRIES:
            return { ...state, loading: true }

        case GET_COUNTRIES_SUCCESS:
            return {
                ...state,
                loading: false,
                countries: action.payload.sort(() => Math.random() - 0.5)
            }

        case GET_COUNTRIES_ERROR:
            return { ...state, loading: false, error: action.payload }

        case GET_NAME_COUNTRY:
            return {
                ...state,
                countries: action.payload.sort(() => Math.random() - 0.5)
            }

        case GET_IDCOUNTRY:
            return {
                ...state,
                loading: false,
                countries: state.countries.sort(AZ)
            }

        case GET_COUNTRY:
            return {
                ...state,
                country: action.payload
            }

        default:
            return state
    }
}


//Actions
export const getCountries = (form) => async (dispatch, getState) => {
    
    console.log('----------->', form )
    dispatch({
        type: GET_COUNTRIES,
    })
    try {
        const { data } = await axios.get(`${url}/countries`, {
            ...form
        })
        dispatch({
            type: GET_COUNTRIES_SUCCESS,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: GET_COUNTRIES_ERROR,
            payload: err.response.message
        })
    }
}

export const getIdCountries = () => {
    return async (dispatch) => {
        const { data } = await axios.get(`${url}/countries`)
        dispatch({
            type: GET_IDCOUNTRY,
            payload: data
        })
    }
}

export const getCountry = (id) => {
    return async (dispatch) => {
        const { data } = await axios.get(`${url}/countries/${id}`)
        dispatch({
            type: GET_COUNTRY,
            payload: data
        })
    }
}

export const getNameCountry = (name) => {
    return async (dispatch) => {
        const { data } = await axios.get(`${url}/countries?name=${name}`)
        dispatch({
            type: GET_NAME_COUNTRY,
            payload: data
        })
    }
}

export const postCountry = (body, countries) => {
    return async () => {
        await axios.post(`${url}/activities`, { ...body, countries })
    }
}