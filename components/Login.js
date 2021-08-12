import React from 'react'
import './Login.css'
import {auth,provider} from '../firebase'
import { Button } from '@material-ui/core'
import { useStateValue } from '../StateProvider'
import { actionTypes } from '../reducer'
function Login() {
    const [state,dispatch]=useStateValue();
    const signIn=()=>{
        auth.
            signInWithPopup(provider).
            then(result => {
                dispatch({
                    type:actionTypes.SET_USER,
                    user: result.user,
                })
            })
            .catch(error => {
                alert(error.mesage)
            })
    }

    return (
        <div className='login'>
            <div className="login_container">
                <img src="https://seekvectorlogo.com/wp-content/uploads/2019/05/slack-technologies-vector-logo.png" alt="" />
                <h1>Sign in to Slack Clone</h1>
                <p>abhijeetkarmakar1920@gmail.com</p>
                <Button onClick={signIn}>Sign in with Google</Button>
            </div>
        </div>
    )
}
export default Login
