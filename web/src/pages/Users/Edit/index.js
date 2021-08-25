import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Menu from "../../../components/Menu";
import {
  Container,
  TitleContent,
  Title,
  ActionButton,  
  AlertDanger,
  AlertSuccess,
  InfoButton,
  Content,
  WarningButton,
  Form,
  Label,
  Input,
} from "../../../styles/global";
import api from "../../../config/configApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const UserEdit = (props) => {
  const [id] = useState(props.match.params.id);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [status, setStatus] = useState({
      type: '',
      message: ''
  });
  
  const UserEdit = async e => {
    e.preventDefault();

    const headers = {
      'Content-Type': 'application/json'
    }

    await api.put('/login/update', { id, name, email, password}, { headers })
    .then((response) => {
      if(response.data.error) {
        setStatus({
          type: 'error',
          message: response.data.message
        });
      }else {
        setStatus({
          type: 'success',
          message: response.data.message
        });
      }
    }).catch(() => {
      setStatus({
        type: 'error',
        message: 'Erro ao cadastrar usuário. API'
      });
    });
  }

  useEffect(() => {
    const getUser = async () => {         
      await api.get('/login/' + id)
      .then((response) => {        
        if(response.data.error) {
          setStatus({
            type: 'error',
            message: response.data.message
          });
        }else{
          setName(response.data.data.name);
          setEmail(response.data.data.email);
        }        
      })
      .catch(() => {
        setStatus({
          type: 'error',
          message: 'Erro: Tente mais tarde! - Não foi posível conectar na API'
        });
      });
    }
    
    getUser();
  },[id]);

  return (
    <Container>
      <Menu />
      <TitleContent>
        <Title><FontAwesomeIcon icon="user" /> Editar Usuário</Title>
        <ActionButton>
          <Link to="/users/list">
            <InfoButton>Listar</InfoButton>
          </Link>
        </ActionButton>
      </TitleContent>
      <Content>
        {status.type === "error" ? (
          <AlertDanger>{ status.message }</AlertDanger>
        ) : (
          ""
        )}
        {status.type === "success" ? (
          <AlertSuccess>{ status.message }</AlertSuccess>
        ) : (
          ""
        )}

        <Form onSubmit = { UserEdit }>
          <Label htmlFor="name">Nome:</Label>
          <Input type="text" name="name" placeholder="Nome do usuário" value= { name } onChange={ e => setName(e.target.value)}/>
          <Label htmlFor="email">E-mail:</Label>
          <Input type="text" name="email" placeholder="E-mail" value= { email } onChange={ e => setEmail(e.target.value)}/>
          <Label htmlFor="password">Senha:</Label>
          <Input type="password" name="password" autoComplete="on" placeholder="informe a senha" onChange={ e => setPassword(e.target.value)}/>

          <WarningButton type="submit">Atualizar</WarningButton>
        </Form>
      </Content>
    </Container>
  );
};
