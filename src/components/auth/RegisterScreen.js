import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import validator from 'validator';
import {setError, removeError} from '../../actions/ui';
import {useDispatch, useSelector} from 'react-redux';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';

export const RegisterScreen = () => {

    const dispatch = useDispatch();
    //const state=useSelector(state=>state.UI);
    //console.log(state);
    const {msgError}=useSelector(state=>state.UI);
    


    const [formValues, handleInputChange] = useForm({
        name: 'Sheila',
        email: 'sheila@gmail.com',
        password: 111111,
        password2: 111111
    })
    const {name, email, password, password2} = formValues;


    const handleRegister=(e)=>{
        e.preventDefault();

        //Si isFormValid devuelve true
        if(isFormValid()){
            dispatch(startRegisterWithEmailPasswordName(email, password, name));
        }

        
    }

    const isFormValid=()=>{
        if(name.trim().length===0){
            console.log('Name is required');
            dispatch(setError('Name is required'))
            return false;
        }else if(!validator.isEmail(email)){
            console.log('Email is not valid');
            dispatch(setError('Email is not valid'))
            return false;
        }else if(password!==password2 && password.length<5){
            console.log('Password should be at least 6 characters and match')
            dispatch(setError('Password should be at least 6 characters and match'))
            return false;
        }
        
        dispatch(removeError())
        return true;
        
    }

    return (
        <>
            <h3 className="auth__title">Register</h3>

            <form onSubmit={handleRegister}>

                {
                    msgError &&
                    (
                        <div className="auth__alert-error">
                            {msgError}
                        </div>
                    )
                }
                <input 
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="auth__input"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                />

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

                <input 
                    type="password"
                    placeholder="Confirm password"
                    name="password2"
                    className="auth__input"
                    value={password2}
                    onChange={handleInputChange}
                />


                <button
                    type="submit"
                    className="btn btn-primary btn-block mb-5"
                >
                    Register
                </button>

               

                <Link 
                    to="/auth/login"
                    className="link"
                >
                    Already registered?
                </Link>

            </form>
        </>
    )
}
