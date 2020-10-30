
import React from 'react'
import { useHistory } from 'react-router-dom'
import { useStateValue } from '../stateProvider';
import './SignIn.css'

const SignIn = () => {
    const [{ basket, user }, dispatch] = useStateValue()

    const history = useHistory();

    return (
        <div className="signin">
            <h2>Sign In for the best experience</h2>
            <button onClick={e => user ? alert('already signed in') : history.push('/login')}> Sign in Securely</button>
        </div>


    )
}

export default SignIn
