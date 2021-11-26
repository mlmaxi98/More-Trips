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
    next: null,
    prev: null,
    pages: 0,
}

export function rootReducer(state = initialState, action) {

    switch (action.type) {

        case GET_COUNTRIES:
            return { ...state, loading: true }

        case GET_COUNTRIES_SUCCESS:
            return {
                ...state,
                loading: false,
                next: action.payload.next,
                prev: action.payload.prev,
                countries: action.payload.rows,
                pages: action.payload.pages,
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
export const getCountries = (form) => async (dispatch) => {
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

export const getCountry = (id) => async (dispatch) => {
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

export const postCountry = (body, countries) => {
    return async () => {
        await axios.post(`${url}/activities`, { ...body, countries })
    }
}