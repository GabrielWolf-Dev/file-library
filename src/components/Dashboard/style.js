import styled from 'styled-components';
import { black, cianBlue } from '../UI/colors';

export const NavAccount = styled.nav`
    width: 100%;
    max-width: 300px;
    height: 42px;
    margin: 32px auto;
    padding: 0 2%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (min-width: 368px) { max-width: 400px; }
    @media (min-width: 768px) {
        max-width: 1280px;
        height: 62px;
    }
`;

export const ImgAccount = styled.img`
    width: 42px;
    height: 42px;
    border-radius: 50%;
    margin-right: 16px;
    display: inline-block;

    @media (min-width: 768px) {
        width: 62px;
        height: 62px;
    }
`;

export const FigCaptionImg = styled.figcaption`
    font-size: 1rem;
    height: 100%;
    font-weight: lighter;
    color: ${black};
    display: inline-block;
    vertical-align: middle;
    margin-bottom: 4px;
`;

export const ButtonIcon = styled.button`
    width: 26px;
    height: 26px;
    background-color: transparent;
    color: ${cianBlue};

    @media (min-width: 368px) {
        width: 32px;
        height: 32px;
    }

    @media (min-width: 768px) {
        width: 42px;
        height: 42px;
    }
`;
