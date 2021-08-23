import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Menu from '../../../components/Menu';
import { 
    Container, 
    TitleContent, 
    Title, 
    ActionButton,
    SuccessButton,
    Table,
    AlertDanger,
    AlertSuccess,
    PrimaryButton,
    WarningButton,
    DangerButton
} from '../../../styles/global';
import api from '../../../config/configApi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const UsersList = () => {

    const [data, setData] = useState({});
    const [status, setStatus] = useState({
        type: '',
        message: ''
    });

    const getUsers = async () => {
        await api.get('/login/list')
        .then((response) => {
            // console.log(response.data);
            if(response.data.error) {
                setStatus({
                    type: 'error',
                    message: response.data.message
                })
            } else {                
                setData(response.data.users);
            }
        })
        .catch(() => {
            setStatus({
                type: 'error',
                message: 'Nenhum usuário localizado (API nao respondeu)' 
            })
        });
    }
    
    useEffect(() => {
        getUsers();
    }, []);

    return (
        <Container>
            <Menu />
            <TitleContent>
                <Title>Listar Usuários</Title>
                <ActionButton>
                    <Link to="/users/create">
                        <SuccessButton>Cadastrar</SuccessButton>
                    </Link>
                </ActionButton>
            </TitleContent>            
            {status.type === "error" ? <AlertDanger>{status.message}</AlertDanger> : ""}
            {status.type === "success" ? <AlertSuccess>{status.message}</AlertSuccess> : ""}
            <Table>
                <thead>
                    <tr>
                        <th>#id</th>
                        <th>nome</th>
                        <th>e-mail</th>
                        <th>ações</th>
                    </tr>
                </thead>
                <tbody>                   
                    { 
                        Array.isArray(data) && data.map(user => (
                            <tr key = { user.uuid }>
                                <td>{ user.idUser }</td>
                                <td>{ user.name }</td>
                                <td>{ user.email }</td>
                                <td>
                                    <Link to={'/users/show/' + user.uuid}>
                                        <PrimaryButton title="Visualizar">
                                            <FontAwesomeIcon icon="eye" />
                                        </PrimaryButton> 
                                    </Link>
                                    <Link to={'/edit/' + user.uuid}>
                                        <WarningButton title="Editar">
                                            <FontAwesomeIcon icon="edit" />
                                        </WarningButton>
                                    </Link> 
                                    <Link to={'/edit/' + user.uuid}>
                                        <DangerButton title="Apagar">
                                            <FontAwesomeIcon icon="user-minus" />
                                        </DangerButton>
                                    </Link>
                                </td>
                            </tr>
                        ))
                    }                    
                </tbody>
            </Table>
        </Container>
    );
}