import React, {useEffect, useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from 'react-router-dom';

import { AuthRouter } from './AuthRouter';
import { JournalScreen } from '../components/journal/JournalScreen';
import {getAuth, onAuthStateChanged} from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';


export const AppRouter = () => {

    const [checking, setChecking] = useState(true);
    const [isLoggedIn, setIsLoggedIn] =useState(false);

    const dispatch = useDispatch()

    useEffect(() => {
//onAuthStateChanged es una funcion de firebase que comprueba si el usuarioe esta logueado o no.
//asi al recargar pagina, comprueba si esta logueado, y si esta logueado vuelve a enviar los datos al reducer login para que se muestren en la pagina
        const auth=getAuth();
        onAuthStateChanged(auth, (user) =>{
            console.log(user);
            //Si el user trae info(es decir, si esta autenticado)
            if(user?.uid){
                dispatch(login(user.uid, user.displayName))
                setIsLoggedIn(true);
            }else{
                setIsLoggedIn(false);
            }

            setChecking(false);
        });  
    }, [dispatch, setChecking, setIsLoggedIn])

    if(checking) {
        return( <h1>Espere...</h1>)
    }

    return (
        <Router>
            <div>
                <Switch>
                    <Route 
                        path="/auth"
                        component={ AuthRouter }
                    />

                    <Route 
                        exact
                        path="/"
                        component={ JournalScreen }
                    />

                    <Redirect to="/auth/login" />


                </Switch>
            </div>
        </Router>
    )
}
