import React from 'react'
import "./Login.css"
import { Button } from '@material-ui/core';
import {auth,provider} from '../firebase';
import {useStateValue} from "./StateProvider"
import { actionTypes } from '../reducer';

function Login() {
    // eslint-disable-next-line
    const [{}, dispatch] = useStateValue();

    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .then((result) => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                })
            })
            .catch((err) => alert(err.message))
    }

    return (
        <div className="login">
           <div className="login__container">
               <img src="../images/CC2.png" alt="Logo Grupo Rl"/> 
                <div className="login__text">
                    <h1>Sign in to Grupo RL Chat</h1>
                </div>
                <Button type="submit" onClick={signIn}>Sign in With Google</Button>
           </div>
        </div>
    )
}

export default Login
