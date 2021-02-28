import React from 'react'
import './css/Login.css'

export default function Login() {
    return (
        <div class="login">
            <h1>Login</h1>
            <form>
                <label for="login__email">Email</label>
                <input type="email" id="login__email" name="login__email" />
                <label for="login__password">Email</label>
                <input type="password" id="login__password" name="login__password" />
            </form>
        </div>
    )
}
