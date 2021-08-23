import React from 'react';
import { Container, TitleContent, Title  } from '../../styles/global';
import Menu from '../../components/Menu';

export const Dashboard = () => {
    return(        
        <Container>
            <Menu />
            <TitleContent>
                <Title>Dashboard</Title> 
            </TitleContent>            
        </Container>
    );
}