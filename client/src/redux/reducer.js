import { AZ } from '../components/Home/Ordenamiento'
import { GET_COUNTRIES, GET_IDCOUNTRY, GET_COUNTRY, GET_NAME_COUNTRY, /* GET_COUNTRY_FILTERS */ } from './consts'

const initialState = {
    countries: [],
    country: {},
    idCountries: [],
}

export function rootReducer(state = initialState, action) {

    switch (action.type) {
        case GET_COUNTRIES:
            return { ...state, countries: action.payload.sort(() => Math.random() - 0.5) }

        case GET_NAME_COUNTRY:
            return { ...state, countries: action.payload.sort(() => Math.random() - 0.5) }

        case GET_IDCOUNTRY:
            return {
                ...state, idCountries: state.countries.map(pais => { return { id: pais.alpha3Code, name: pais.name, } }).sort(AZ)
            }

        case GET_COUNTRY:
            return { ...state, country: action.payload }

        default:
            return state
    }
}