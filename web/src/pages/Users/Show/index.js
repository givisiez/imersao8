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
  Content
} from "../../../styles/global";
import api from "../../../config/configApi";
import { UserContent } from '../Styles/styles';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const UserShow = (props) => {
  const [dataUser, setDataUser] = useState([]);
  const [id] = useState(props.match.params.id);
  const [status, setStatus] = useState({
      type: '',
      message: ''
  });  

  useEffect(() => {
    const getUser = async () => {         
      await api.get('/login/' + id)
      .then((response) => {        
        if(response.data.error){
          setStatus({
            type: 'error',
            message: response.data.message
          });
        }else{
          setDataUser(response.data.data);
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
        <Title><FontAwesomeIcon icon="user" /> Dados do Usuário</Title>
        <ActionButton>
          <Link to="/users/list">
            <InfoButton>Listar</InfoButton>
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
        <UserContent><b>Nome:</b> { dataUser.name }</UserContent> 
        <UserContent><b>E-mail:</b> { dataUser.email }</UserContent>
      </Content>
    </Container>
  );
};
