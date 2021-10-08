import styled from "styled-components";

import { white, blueDark, cianBlue } from '../UI/variables';

const BgHeader = styled.header`
    width: 100%;
    height: 60px;
    background-color: ${blueDark};
`;

const ButtonMenu = styled.button`
    width: 32px;
    height: 32px;
    background-color: transparent;
    color: ${cianBlue};
`;

const Nav = styled.nav`
    width: 100vw;
    position: absolute;
    top: calc(60px);
    left: 0;
    border-top: 1px solid ${white};
    padding: 24px 0;
    text-align: center;
    background-color: ${blueDark};
    transition: all ease-in .3s;
`;

const ListMenu = styled.li`
    margin: 16px 0;
    font-size: 1.7rem;
    font-weight: 500;
`;

export {
    BgHeader,
    ButtonMenu,
    Nav,
    ListMenu
};