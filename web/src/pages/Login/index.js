import React, { useState, useContext } from "react";
import { Context } from "../../Context/AuthContext";
import api from "../../config/configApi";
import { useHistory } from "react-router-dom";
import { Container, FormLogin, Title, Input, ButtonPrimary, AlertDanger, AlertSuccess } from "./styles";

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
      .post("/login", userValue, { headers })
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
          localStorage.setItem("token", JSON.stringify(response.data.token));
          api.defaults.headers.Authorizarion = `Beare ${response.data.token}`;
          signIn(true);
          return history.push("/dashboard");
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
    <Container>
      <FormLogin>
        <Title>Login</Title>
        <form onSubmit={loginSubmit}>          
          <Input
            type="text"
            name="email"
            placeholder="E-mail"
            onChange={inputValue}
          /> 
          <Input
            type="password"
            name="password"
            placeholder="Senha"
            autoComplete="on"
            onChange={inputValue}
          />          
          <ButtonPrimary type="submit">Acessar</ButtonPrimary>
          
          {status.type === "error" ? <AlertDanger>{status.message}</AlertDanger> : ""}
          {status.type === "success" ? <AlertSuccess>{status.message}</AlertSuccess> : ""}
        </form>
      </FormLogin>
    </Container>
  );
};
