import React from 'react'
import './css/Register.css';
import {Button, Input, InputLabel} from '@material-ui/core';
import {Link} from 'react-router-dom';

export default function Register() {
    return (
        <div class="register">

            <div className="register__links">
                <Link class="register__link" to='/'>Home page</Link>
                <Link class="register__link" to='/login'>Login</Link>
            </div>

            <div class="register__container">
                <h1 class="register__title">Register</h1>
                <form class="register__form">
                    <div class="register__row">
                        <InputLabel for="register__email">Email</InputLabel>
                        <Input type="email" id="register__email" name="register__email" />
                    </div>
                    <div class="register__row">
                        <InputLabel for="register__name">Name</InputLabel>
                        <Input type="text" id="register__name" name="register__name" />
                    </div>
                    <div class="register__row">
                        <InputLabel for="register__name">Surname</InputLabel>
                        <Input type="text" id="register__surname" name="register__surname" />
                    </div>
                    <div class="register__row">
                        <InputLabel for="register__password">Password</InputLabel>
                        <Input type="password" id="register__password" name="register__password" />
                    </div>
                    <div class="register__row">
                        <InputLabel for="register__conf_password">Confirm password</InputLabel>
                        <Input type="password" id="register__conf_password" name="register__conf_password" />
                    </div>
                    <div className="register__row">
                        <Button>submit</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}
