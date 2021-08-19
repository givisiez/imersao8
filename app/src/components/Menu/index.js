import React, { useContext } from 'react';
import { NavList } from './styles';
import { NavLink } from 'react-router-dom';
import { Context } from '../../Context/AuthContext';

const Menu = () => {
    // desestruturacao
    const { handleLogout } = useContext(Context);

    return(
        <nav>
            <NavList>
                <NavLink to="/dashboard" exact>
                    <li>Dashboard</li>
                </NavLink>
                <NavLink to="/users/list" exact>
                    <li>Usuários</li>
                </NavLink>
                <NavLink to="#" exact>
                    <li onClick={ handleLogout }>Sair</li>
                </NavLink>
            </NavList>
        </nav>
    )
}

export default Menu;