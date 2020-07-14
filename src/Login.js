import React, { useState } from 'react'
import './Login.css'
import { Link, Redirect, useHistory } from 'react-router-dom'
import { auth } from './firebase'
function Login() {
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const login = e => {
        e.preventDefault()
        // login logic
        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                // return
                history.push('/')

            })
            .catch((e) => alert(e.message))

    }
    const register = e => {
        e.preventDefault()
        auth.createUserWithEmailAndPassword(email, password)
            .then(auth => {
                // return logged in redirect home page
                history.push('/')

            })
            .catch((e) => alert(e.message))
        // login logic


    }
    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                />
            </Link>
            <div className="login__container">
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input value={email} onChange={e => setEmail(e.target.value)} type="email" />
                    <h5>Password</h5>
                    <input value={password} onChange={e => setPassword(e.target.value)} type="password" />
                    <button onClick={login} type="submit" className="login__signInButton">Sign in</button>
                </form>
                <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.                </p>
                <button onClick={register} className="login_registerButton">Create Your Amazon account</button>
            </div>
        </div >
    )
}

export default Login
