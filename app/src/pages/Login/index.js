import React, { useState } from 'react';
import axios from 'axios';
import { api } from '../../config/configApi';

export const Login = () => {

    const [userValue, setUser] = useState({
        email: '',
        password: ''
    });

    const [status, setStatus] = useState({
        type: '',
        message: ''
    });
    
    const inputValue = e => setUser({ 
        ...userValue, [e.target.name]: e.target.value 
    });

    const loginSubmit = async e => {
        e.preventDefault(); // para não recarregar o formulario        
        const headers = {
            'Content-Type': 'application/json'
        };

        axios.post(api + '/login', userValue, { headers })
        .then((response => {            
            if(response.data.error) {
                setStatus({
                    type: 'error',
                    message: response.data.message
                });
            } else {
                setStatus({
                    type: 'success',
                    message: response.data.message
                });
            }
        })).catch(() => {
            setStatus({
                type: 'error',
                message: 'Usuário ou senha incorreto!'
            });            
        })
    }

    return (
        <div>
            <h1>Login</h1>
           
            { status.type === 'error' ? <p>{ status.message }</p> : '' }
            { status.type === 'success' ? <p>{ status.message }</p> : '' }
            
            <form onSubmit={ loginSubmit }>
                <label>Email</label>
                <input type="text" name="email" placeholder="Digite seu email" onChange={ inputValue } />
                <label>Email</label>
                <input type="password" name="password" placeholder="Digite sua senha" onChange={ inputValue } />
                <button  type="submit">Logar</button>
            </form>
        </div>
    )
}