import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import { authReducer } from '../reducers/authReducer';
import { uiReducer } from '../reducers/uiReducer';
import thunk from 'redux-thunk';

//Esto habilita devtools y middleware
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers=combineReducers({
    auth: authReducer,
    ui: uiReducer
})

//createStore solo puede recibir un reducer. Por lo que se combinan todos los reducers en 
//una constante.
export const store = createStore(
    reducers,

    //Esto es para trabajar con funciones asincronas
    composeEnhancers(
        applyMiddleware(thunk)
    )
);