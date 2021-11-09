import { types } from "../types/types";
import {app, googleAuthProvider} from '../firebase/firebase-config'
import { getAuth, signOut, signInWithPopup, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword} from 'firebase/auth';
import {startLoading, finishLoading} from '../actions/ui';




//import {firebaseApp, googleAuthProvider} from '../firebase/firebase-config'



//Funcion asincrona. Esta funcion regresa un callback
export const startLoginEmailPassword=(email, password)=>{
    return(dispatch)=>{
        dispatch(startLoading());

        const auth=getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then( ({user}) => {
                dispatch(login(user.uid, user.displayName))
                dispatch(finishLoading());
            })
            .catch(e => {
                dispatch(finishLoading());
                console.log(e);
            })
    }
}

export const startRegisterWithEmailPasswordName=(email, password, name)=>{
    return ( dispatch ) => {
        const auth=getAuth();
        createUserWithEmailAndPassword(auth, email,password )
            .then( async ({user}) => {
                await updateProfile(user,{displayName:name})
                dispatch(
                    login(user.uid, user.displayName)
                )
                
            })
            .catch((err)=> console.error(err));
    }
}


export const startGoogleLogin = () =>{
    return (dispatch) =>{
        const auth = getAuth();
        signInWithPopup(auth, googleAuthProvider)
            .then(({user}) =>{
                dispatch(login(user.uid, user.displayName))
            });
    }
}

export const login=(uid, displayName)=>{
    return{
        type: types.login,
        payload: {
            uid,
            displayName
        }

    }
}

export const startLogout=()=>{
    return async(dispatch)=>{
        const auth=getAuth();
        await auth.signOut();
           // .then( async ({user}) => {
               // await updateProfile(user,{displayName:name})
                dispatch(logout())
                
           // })
          //  .catch((err)=> console.error(err));
    }
}

export const logout=()=>({
    type: types.logout
})















