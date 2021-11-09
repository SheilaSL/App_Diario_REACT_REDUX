import {types} from '../types/types';


//Es importante que el state se inicialice siempre, aunque este vacio, que no sea null ni undefined
export const authReducer = (state = {}, action) => {

    switch (action.type) {
        case types.login:
            return {
                uid: action.payload.uid,
                name: action.payload.displayName
            }

        case types.logout:
            return {}
            
        default:
            return state;
    }
}