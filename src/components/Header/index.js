import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Menu from '@material-ui/icons/Menu';
import { useAuth } from '../../hooks/useAuth';

import LogoIcon from '../../assets/img/file-icon.png';
import {
    BgHeader,
    ButtonMenu,
    ListMenuMobile,
    NavMobile,
    NavDesktop,
    ListMenuDesktop
} from './style';
import { ContainerFlexBetween } from '../UI';
import { white, cianBlue } from '../UI/colors';

export default function Header() {
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const { isAuth } =  useAuth();
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

                <NavDesktop>
                    {
                        Object.keys(isAuth).length !== 0 ? (
                            <ul>
                                <ListMenuDesktop>
                                <Link 
                                    style={{ color: pathName === '/' ? cianBlue : white }} 
                                    to="/"
                                >Home Page</Link>
                                </ListMenuDesktop>
                                <ListMenuDesktop>
                                    <Link
                                        style={{ color: pathName === '/dashboard' ? cianBlue : white }}
                                        to="/dashboard"
                                    >Dashboard</Link>
                                </ListMenuDesktop>
                                <ListMenuDesktop>
                                    <Link
                                        style={{ color: pathName === '/credits' ? cianBlue : white }}
                                        to="/credits"
                                    >Creditos</Link>
                                </ListMenuDesktop>
                            </ul>
                        ) : (
                            <ul>
                                <ListMenuDesktop>
                                <Link 
                                    style={{ color: pathName === '/' ? cianBlue : white }} 
                                    to="/"
                                >Home Page</Link>
                                </ListMenuDesktop>
                                <ListMenuDesktop>
                                    <Link
                                        style={{ color: pathName === '/login' ? cianBlue : white }}
                                        to="/login"
                                    >Login</Link>
                                </ListMenuDesktop>
                                <ListMenuDesktop>
                                    <Link
                                        style={{ color: pathName === '/register' ? cianBlue : white }}
                                        to="/register"
                                    >Registrar-se</Link>
                                </ListMenuDesktop>
                                <ListMenuDesktop>
                                    <Link
                                        style={{ color: pathName === '/credits' ? cianBlue : white }}
                                        to="/credits"
                                    >Creditos</Link>
                                </ListMenuDesktop>
                            </ul>
                        )
                    }
                </NavDesktop>

                <NavMobile style={isOpenMenu ? showMenu : hideMenu}>
                    {
                        Object.keys(isAuth).length !== 0 ? (
                            <ul>
                                <ListMenuMobile>
                                    <Link 
                                        style={{ color: pathName === '/' ? cianBlue : white }} 
                                        to="/"
                                    >Home Page</Link>
                                </ListMenuMobile>
                                <ListMenuMobile>
                                    <Link
                                        style={{ color: pathName === '/dashboard' ? cianBlue : white }}
                                        to="/dashboard"
                                    >Dashboard</Link>
                                </ListMenuMobile>
                                <ListMenuMobile>
                                    <Link
                                        style={{ color: pathName === '/credits' ? cianBlue : white }}
                                        to="/credits"
                                    >Creditos</Link>
                                </ListMenuMobile>
                            </ul>
                        ) : (
                            <ul>
                                <ListMenuMobile>
                                    <Link 
                                        style={{ color: pathName === '/' ? cianBlue : white }} 
                                        to="/"
                                    >Home Page</Link>
                                </ListMenuMobile>
                                <ListMenuMobile>
                                    <Link
                                        style={{ color: pathName === '/login' ? cianBlue : white }}
                                        to="/login"
                                    >Login</Link>
                                </ListMenuMobile>
                                <ListMenuMobile>
                                    <Link
                                        style={{ color: pathName === '/register' ? cianBlue : white }}
                                        to="/register"
                                    >Registrar-se</Link>
                                </ListMenuMobile>
                                <ListMenuMobile>
                                    <Link
                                        style={{ color: pathName === '/credits' ? cianBlue : white }}
                                        to="/credits"
                                    >Creditos</Link>
                                </ListMenuMobile>
                            </ul>
                        )
                    }
                </NavMobile>
            </ContainerFlexBetween>
        </BgHeader>
    )
}
