import React from "react";
import {Button} from "@material-ui/core";
import {auth, provider } from './firebase';
import {useStateValue} from './StateProvider';
import {actionTypes} from './reducer';
import './Login.css';
function Login() {
    const [state, dispatch] =useStateValue();
    const signIn = () => {
        auth
        .signInWithPopup(provider)
        .then((result) => {
            console.log(result);
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            });
        })
        .catch((error) => {
            alert(error.message)
        });
    };
    return <div className="login">
        <div className="login__container">
            <h1>Elevator Pitch</h1>
            <h4>Work, Hire, & Collaborate</h4>
            <Button onClick={signIn}>Sign in with Google</Button>
        </div>
    </div>;
}

export default Login;
