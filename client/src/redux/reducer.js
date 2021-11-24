import axios from 'axios'

//Consts
const url = 'http://localhost:3001'
//const url = 'https://dbcountries.herokuapp.com'

const GET_COUNTRIES = 'GET_COUNTRIES'
const GET_COUNTRIES_SUCCESS = 'GET_COUNTRIES_SUCCESS'
const GET_COUNTRIES_ERROR = 'GET_COUNTRIES_ERROR'

const GET_COUNTRY = 'GET_COUNTRY'
const GET_COUNTRY_SUCCESS = 'GET_COUNTRY_SUCCESS'
const GET_COUNTRY_ERROR = 'GET_COUNTRY_ERROR'


const initialState = {
    loading: false,
    countries: [],
    country: {},
    nextPage: null,
}

export function rootReducer(state = initialState, action) {

    switch (action.type) {

        case GET_COUNTRIES:
            return { ...state, loading: true }

        case GET_COUNTRIES_SUCCESS:
            return {
                ...state,
                loading: false,
                nextPage: action.payload.nextPage,
                countries: action.payload.rows
            }

        case GET_COUNTRIES_ERROR:
            return { ...state, loading: false, error: action.payload }

        case GET_COUNTRY:
            return { ...state, loading: true }

        case GET_COUNTRY_SUCCESS:
            return {
                ...state,
                loading: false,
                country: action.payload
            }
        case GET_COUNTRY_ERROR:
            return { ...state, loading: false, error: action.payload }

        default:
            return state
    }
}


//Actions
export const getCountries = (form) => async (dispatch, getState) => {

    console.log('----------->', form)
    dispatch({
        type: GET_COUNTRIES,
    })
    try {
        const { data } = await axios.get(`${url}/countries`, {
            //Params === Queries en axios(?)
            params: {
                ...form
            }
        })
        console.log('Countries------>', data)
        dispatch({
            type: GET_COUNTRIES_SUCCESS,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: GET_COUNTRIES_ERROR,
            payload: err.message
        })
    }
}

export const getCountry = (id) => {

    return async (dispatch) => {

        dispatch({
            type: GET_COUNTRY,
        })
        try {
            const { data } = await axios.get(`${url}/countries/${id}`)
            dispatch({
                type: GET_COUNTRY_SUCCESS,
                payload: data
            })
        } catch (err) {
            dispatch({
                type: GET_COUNTRY_ERROR,
                payload: err.message
            })
        }
    }
}

/* export const getNameCountry = (name) => {
    return async (dispatch) => {
        const { data } = await axios.get(`${url}/countries?name=${name}`)
        dispatch({
            type: GET_NAME_COUNTRY,
            payload: data
        })
    }
} */

export const postCountry = (body, countries) => {
    return async () => {
        await axios.post(`${url}/activities`, { ...body, countries })
    }
}