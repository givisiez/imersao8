import React, { useState } from "react";
import { Link } from "react-router-dom";
import Menu from "../../../components/Menu";
import api from "../../../config/configApi";
import {
  Container,
  TitleContent,
  Title,
  ActionButton,  
  AlertDanger,
  AlertSuccess,
  InfoButton,  
  Content,
  Form,
  Label,
  Input,
  SuccessButton
} from "../../../styles/global";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const UserCreate = () => {

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [status, setStatus] = useState({
      type: '',
      message: ''
  }); 

  const inputValue = e => setUser({ ...user, [e.target.name]: e.target.value });

  const UserCreate = async e => {
    e.preventDefault();

    const headers = {
      'Content-Type': 'application/json'
    }
    
    await api.post('/login/create', user, { headers })
    .then((response) => {
      if(response.data.error) {
        setStatus({
          type: 'error',
          message: response.data.message
        });
      }else{
        setStatus({
          type: 'success',
          message: response.data.message
        });
      }
    }).catch(() => {
      setStatus({
        type: 'error',
        message: 'Erro API não respondeu!'
      })
    });
  }

  return (
    <Container>
      <Menu />
      <TitleContent>
        <Title> Cadastrar Usuário</Title>
        <ActionButton>
          <Link to="/users/list">
            <InfoButton><FontAwesomeIcon icon="user" /> Listar</InfoButton>
          </Link>
        </ActionButton>
      </TitleContent>

      <Content>
        {status.type === "error" ? (
          <AlertDanger>{status.message}</AlertDanger>
        ) : (
          ""
        )}
        {status.type === "success" ? (
          <AlertSuccess>{status.message}</AlertSuccess>
        ) : (
          ""
        )}

        <Form onSubmit={ UserCreate }>
          <Label htmlFor="name">Nome:</Label>
          <Input type="text" name="name" placeholder="Nome do usuário" onChange={ inputValue }/>
          <Label htmlFor="email">E-mail:</Label>
          <Input type="text" name="email" placeholder="E-mail" onChange={ inputValue }/>
          <Label htmlFor="password">Senha:</Label>
          <Input type="password" name="password" autoComplete="on" placeholder="informe a senha" onChange={ inputValue }/>

          <SuccessButton type="submit">Cadastrar</SuccessButton>
        </Form>
      </Content>
    </Container>
  );
};
