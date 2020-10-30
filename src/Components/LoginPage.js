import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import './LoginPage.css'
import { auth } from '../firebase'

function LoginPage() {

    const history = useHistory();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signin = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className="loginPage">
            <Link to="/">
                <img className="loginPage__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png" alt=""></img>
            </Link>
            <div className="loginPage__container">
                <h1>Sign-In</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    <button className="loginPage__signinButton" onClick={signin} type='submit'>Sign In</button>
                </form>

                <p>
                    By Signing-in you agree to amazon Conditions of use & sale. Please see our Privacy Policy, our cookies Notice and our Notice.
                </p>

                <h4>Don't Have an Account?</h4>
                <Link to="/createacc">  <button className="loginPage__Createbutton" type='submit'>Create Amazon Account</button> </Link>
            </div>
        </div>
    )
}

export default LoginPage
