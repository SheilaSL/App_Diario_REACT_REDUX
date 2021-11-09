import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import {useDispatch, useSelector} from 'react-redux';
import { startGoogleLogin, startLoginEmailPassword } from '../../actions/auth';
import validator from 'validator';
import {setError, removeError} from '../../actions/ui';

export const LoginScreen = () => {

    const state = useSelector(state => state.ui)
    const {loading} = state;

    const dispatch = useDispatch();

    const [formValues, handleInputChange] = useForm({
        email: 'sheila@gmail.com',
        password:1234
    })

    const {email, password}=formValues;

    const handleSubmit=(e)=>{
        e.preventDefault(e);

        if(handleValidation()){
            //El dispatch recibe el uid y el nombre
            dispatch(startLoginEmailPassword(email, password));
        }
    }

    const handleValidation=()=>{
        if(!validator.isEmail(email)){
            dispatch(setError("Indique un email correcto"));
            return false;
        }else if(password.length===0){
            dispatch(setError("Indique una contraseña"));
            return false;
        }
        dispatch(removeError);
        return true;
    }

    const handleGoogleLogin=()=>{
        dispatch(startGoogleLogin());
    }

    return (
        <>
            <h3 className="auth__title">Login</h3>

            <form onSubmit={handleSubmit}>

                <input 
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />

                <input 
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    value={password}
                    onChange={handleInputChange}
                />


                <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    disabled= {loading}
                >
                    Login
                </button>

                
                <div className="auth__social-networks">
                    <p>Login with social networks</p>

                    <div 
                        className="google-btn"
                        onClick={handleGoogleLogin}
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>

                <Link 
                    to="/auth/register"
                    className="link"
                >
                    Create new account    
                </Link>

            </form>
        </>
    )
}
