import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { auth } from '../firebase'
import './CreateAccount.css'


function CreateAccount() {

    const history = useHistory();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userName, setuserName] = useState('')

    const create = e => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }

    return (
        <div>
            <div className="createAccount">
                <Link to="/">
                    <img className="createAccount__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png" alt=""></img>
                </Link>

                <div className="createAccount__container">
                    <h1>Create an account</h1>
                    <form>
                        <h5>User Name</h5>
                        <input type="text" value={userName} onChange={e => setuserName(e.target.value)} />
                        <h5>E-mail</h5>
                        <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                        <h5>Password</h5>
                        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

                        <button className="createAccount__Createbutton" onClick={create} type='submit'>Create Amazon Account</button>
                    </form>

                    <p>
                        By Signing-in  you agree to amazon Conditions of use & sale. Please see our Privacy Policy, our cookies Notice and our Notice.
                    </p>
                </div>
            </div>
        </div >
    )
}

export default CreateAccount
