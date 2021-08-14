import React, { useState, useContext } from "react";
import { Context } from "../../Context/AuthContext";
import api from "../../config/configApi";
import { useHistory } from 'react-router-dom';

// identar Alt + Shift + F
export const Login = () => {

  const history = useHistory();  
  const { signIn } = useContext(Context);  
  const [userValue, setUser] = useState({
    email: "",
    password: "",
  });
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });
  const inputValue = (e) =>
    setUser({
      ...userValue,
      [e.target.name]: e.target.value,
    });
  const loginSubmit = async (e) => {
    e.preventDefault(); // para não recarregar o formulario
    const headers = {
      "Content-Type": "application/json",
    };

    api
      .post('/login', userValue, { headers })
      .then((response) => {         
        if (response.data.error) {
          setStatus({
            type: "error",
            message: response.data.message,
          });
        } else {
          setStatus({
            type: "success",
            message: response.data.message,
          });

          // localStorage serve para salvar o token
          localStorage.setItem('token', JSON.stringify(response.data.token));
          api.defaults.headers.Authorizarion = `Beare ${response.data.token}`; 
          signIn(true);
          return history.push('/dashboard');
        }
      })
      .catch(() => {
        setStatus({
          type: "error",
          message: "Usuário ou senha incorreto!",
        });
      });
  };

  return (
    <div>
      <h1>Login</h1>

      {status.type === "error" ? <p>{status.message}</p> : ""}
      {status.type === "success" ? <p>{status.message}</p> : ""}

      <form onSubmit={loginSubmit}>
        <label>Email</label>
        <input
          type="text"
          name="email"
          placeholder="Digite seu email"
          onChange={inputValue}
        />
        <label>Email</label>
        <input
          type="password"
          name="password"
          placeholder="Digite sua senha"
          autoComplete="on"
          onChange={inputValue}
        />
        <button type="submit">Logar</button>
      </form>
    </div>
  );
};
