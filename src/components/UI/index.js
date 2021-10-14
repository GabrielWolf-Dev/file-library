import styled from "styled-components";
import {
    cianBlue,
    orange,
    white
} from './variables';

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

/*-- Btns --*/
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

/*-- Fonts --*/
export const TitleBigger = styled.h1`
    font-size: 2rem;
    font-weight: bold;
    color: ${orange};
`;

export const SubTitle = styled.h2`
    font-size: 1.7rem;
    font-weight: bold;
    color: ${orange};
`;

export const Content = styled.p`
    font-size: 1.25rem;
    font-weight: normal;
`;

/*-- Others --*/

export const LineMobile = styled.hr`
    width: 80%;
    margin: 24px auto;
    border: solid 1px ${orange};

    @media (min-width: 768px) { display: none; }
`;