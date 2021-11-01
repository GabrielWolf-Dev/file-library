import styled from 'styled-components';
import { black, cianBlue, white, orange } from '../UI/colors';

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

export const AccountContainerFlex = styled.section`
    width: 100%;
    max-width: 300px;
    margin: 32px auto;
    padding: 0 2%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 32px;

    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
    }

    @media (min-width: 368px) { max-width: 400px; }
    @media (min-width: 768px) { max-width: 1280px; }
`;

export const BoxInputSearch = styled.div`
    width: 100%;
    max-width: 300px;
    padding: 0 2%;
    height: 42px;
    position: relative;
`;

export const BoxFilter = styled.div`
    width: 100%;
    max-width: 300px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${black};
`;

export const LabelSearch = styled.label`
    position: absolute;
    top: 60%;
    right: 16px;
    transform: translateY(-60%);
    color: ${black};

    @media (min-width: 768px) { right: 36px; }
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

export const SelectFilter = styled.select`
    border: 0;
    font-size: 1rem;
    padding: 8px 0;
    cursor: pointer;
`;

export const ImgIcon = styled.img`
    width: 24px;
    height: 24px;
    cursor: pointer;
`;

export const BtnAddFile = styled.button`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: ${cianBlue};
    color: ${white};
    transition: ease-out .3s;
    position: fixed;
    bottom: 16px;
    right: 16px;
    z-index: 2;

    &:hover {
        opacity: 0.8;
    }

    @media (min-width: 768px) {
        width: 42px;
        height: 42px;

        bottom: 48px;
        right: 24px;
    }
`;

export const PopUpFileAdd = styled.aside`
    width: 100%;
    max-width: 300px;
    padding: 32px 2%;
    border-radius: 10px;
    background-color: ${black};
    text-align: center;
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 2;

    @media (min-width: 768px) {
        max-width: 450px;
    }
`;

export const LabelFileInput = styled.label`
    width: 200px;
    height: 32px;
    line-height: 32px;
    background-color: ${orange};
    border-radius: 10px;
    color: ${white};
    cursor: pointer;
    display: block;
    margin: 16px auto 0 auto;

    @media (min-width: 768px) {
        height: 42px;
        line-height: 42px;
    }
`;

export const BgPopUpFile = styled.div`
    width: 100%;
    height: 100vh;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
    transition: all ease-out .3s;
`;
