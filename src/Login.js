import React from 'react';
import './css/Login.css';
import {Button, Input, InputLabel} from '@material-ui/core';
import {Link} from 'react-router-dom';

export default function Login() {
    return (
        <div class="login">

            <div className="login__links">
                <Link class="login__link" to='/'>Home page</Link>
                <Link class="login__link" to='/register'>Register</Link>
            </div>

            <div class="login__container">
                <h1 class="login__title">Login</h1>
                <form class="login__form">
                    <div class="login__row">
                        <InputLabel for="login__email">Email</InputLabel>
                        <Input type="email" id="login__email" name="login__email" />
                    </div>
                    <div class="login__row">
                        <InputLabel for="login__password">Password</InputLabel>
                        <Input type="password" id="login__password" name="login__password" />
                    </div>
                    <div className="login__row">
                        <Button>Login</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}
