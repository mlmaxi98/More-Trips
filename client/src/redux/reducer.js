import axios from 'axios'

//Consts
// const url = 'http://localhost:3001'
const url = 'https://dbcountries.herokuapp.com'

const LOADING = 'LOADING'
const GET_COUNTRIES_SUCCESS = 'GET_COUNTRIES_SUCCESS'
const GET_COUNTRIES_ERROR = 'GET_COUNTRIES_ERROR'

const GET_COUNTRY_SUCCESS = 'GET_COUNTRY_SUCCESS'
const GET_COUNTRY_ERROR = 'GET_COUNTRY_ERROR'

const POST_COUNTRY_SUCCESS = 'POST_COUNTRY_SUCCESS'
const POST_COUNTRY_ERROR = 'POST_COUNTRY_ERROR'


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

        case LOADING:
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


        case GET_COUNTRY_SUCCESS:
            return {
                ...state,
                loading: false,
                country: action.payload
            }
        case GET_COUNTRY_ERROR:
            return { ...state, loading: false, error: action.payload }

        case POST_COUNTRY_SUCCESS:
            return {
                ...state,
                loading: false,
                countries: action.payload.rows,
            }
        case POST_COUNTRY_ERROR:
            return { ...state, loading: false, error: action.payload }
        default:
            return state
    }
}


//Actions
export const getCountries = (form) => async (dispatch) => {
    dispatch({
        type: LOADING,
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
        type: LOADING,
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

export const postCountry = (body, countries) => async (dispatch) => {
    dispatch({
        type: LOADING,
    })
    try {
        await axios.post(`${url}/activities`, { ...body, countries })
        const { data } = await axios.get(`${url}/countries`)
        dispatch({
            type: POST_COUNTRY_SUCCESS,
            payload: data,
        })
    } catch (err) {
        dispatch({
            type: POST_COUNTRY_ERROR,
            payload: err.message
        })
    }

}
