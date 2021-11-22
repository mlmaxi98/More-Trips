import { createStore, applyMiddleware } from "redux";
import { rootReducer, getCountries } from "./reducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';

//export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export const generateStore = () => {
    let store = createStore(
        rootReducer,
        composeWithDevTools(applyMiddleware(thunk)))

    getCountries()(store.dispatch, store.getState)

    return store
}