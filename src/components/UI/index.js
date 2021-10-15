import styled from "styled-components";
import {
    black,
    cianBlue,
    orange,
    white
} from './colors';

/*-- Containers --*/
export const Container = styled.div`
    width: 100%;
    max-width: 300px;
    height: 100%;
    margin: auto;
    padding: 0 2%;
    text-align: center;

    @media (min-width: 468px) { max-width: 440px; }

    @media (min-width: 568px) { max-width: 540px; }

    @media (min-width: 768px) { max-width: 1280px; }
`;

export const ContainerFlexBetween = styled(Container)`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const ContainerItemsRes = styled(Container)`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 2%;

    @media (min-width: 768px) { justify-content: space-evenly; }
    @media (min-width: 1280px) {
        justify-content: space-between;
        height: 50vh;
    }
`;

export const ContainerAuth = styled.aside`
    width: 100%;
    max-width: 300px;
    height: 100%;
    margin: 32px auto 48px auto;
    padding: 0 2%;
    text-align: center;

    @media (min-width: 468px) { max-width: 440px; }
    @media (min-width: 568px) { max-width: 540px; }
    @media (min-width: 768px) { max-width: 1280px; }
`;

/*-- Btns & Forms/Inputs --*/
export const Button = styled.button`
    width: 100%;
    max-width: 160px;
    height: 42px;
    border-radius: 10px;
    background-color: ${cianBlue};
    color: ${white};
    font-size: 1.25rem;
    font-weight: normal;
    margin-top: 24px;
`;

export const BtnAuthSocial = styled.button`
    width: 32px;
    height: 32px;
    background-color: ${white};
    font-size: 18px;
    color: ${cianBlue};
    margin: 24px 8px 0 8px;

    @media (min-width: 368px) {
        width: 42px;
        height: 42px;
    }
`;

export const Form = styled.form`
    width: 100%;
    max-width: 300px;
    margin: 48px 0 24px 0;

    @media (min-width: 768px) { max-width: 400px; }
`;

export const Input = styled.input`
    width: 100%;
    height: 42px;
    border-radius: 10px;
    border: 3px solid ${orange};
    padding-left: 16px;
    font-size: 1rem;
    font-weight: lighter;
    color: ${black};
`;

export const FieldSet = styled.fieldset`
    width: 100%;
    border: none;
    text-align: left;
    margin: 16px 0;
`;

export const Label = styled.label`
    font-size: 1rem;
    font-weight: lighter;
    color: ${black};
    margin-left: 8px;

`;

/*-- Fonts --*/
export const TitleBigger = styled.h1`
    font-size: 2rem;
    font-weight: bold;
    color: ${orange};
    text-align: center;
`;

export const SubTitle = styled.h2`
    font-size: 1.7rem;
    font-weight: bold;
    color: ${orange};
`;

export const SubTitleAuth = styled.h3`
    font-size: 1.7rem;
    font-weight: bold;  
    color: ${black};
    text-decoration: underline;
`;

export const Content = styled.p`
    font-size: 1.25rem;
    font-weight: normal;
`;

export const SubContent = styled.p`
    font-size: 1rem;
    font-weight: lighter;
    color: ${white};
`;

/*-- Others --*/

export const LineMobile = styled.hr`
    width: 80%;
    margin: 24px auto;
    border: solid 1px ${orange};

    @media (min-width: 768px) { display: none; }
`;

export const IconAuthImg = styled.img`
    width: 100%;
    height: 100%;
`;

export const BoxPlayerAnimation = styled.div`
    width: 100%;
    max-width: 400px;
    display: none;

    @media (min-width: 768px) { display: block; }
`;
