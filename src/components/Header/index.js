import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Menu from '@material-ui/icons/Menu';

import LogoIcon from '../../assets/img/file-icon.png';
import { BgHeader, ButtonMenu, ListMenu, Nav } from './style';
import { ContainerFlexBetween } from '../UI';
import { white, cianBlue } from '../UI/variables';

export default function Header() {
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const pathName = window.location.pathname;

    const showMenu = {
        visibility: 'visible',
        opacity: '1',
    };
    const hideMenu = {
        visibility: 'hidden',
        opacity: '0',
    }

    function handleMenu(){
        setIsOpenMenu(!isOpenMenu);
    }

    return (
        <BgHeader>
            <ContainerFlexBetween>
                <Link to="/">
                    <img src={LogoIcon} alt="Logo" />
                </Link>

                <ButtonMenu onClick={handleMenu}>
                    <Menu style={{ fontSize: "32px" }} />
                </ButtonMenu>

                <Nav style={isOpenMenu ? showMenu : hideMenu}>
                    <ul>
                        <ListMenu>
                            <Link 
                                style={{ color: pathName === '/' ? cianBlue : white }} 
                                to="/"
                            >Home Page</Link>
                        </ListMenu>
                        <ListMenu>
                            <Link
                                style={{ color: pathName === '/login' ? cianBlue : white }}
                                to="/login"
                            >Login</Link>
                        </ListMenu>
                        <ListMenu>
                            <Link
                                style={{ color: pathName === '/register' ? cianBlue : white }}
                                to="/register"
                            >Registrar-se</Link>
                        </ListMenu>
                    </ul>
                </Nav>
            </ContainerFlexBetween>
        </BgHeader>
    )
}
