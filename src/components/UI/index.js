import styled from "styled-components";
import {
    cianBlue,
    orange,
    white
} from './variables';

export const Container = styled.div`
    width: 100%;
    max-width: 1280px;
    margin: 48px auto;
    padding: 0 2%;
    text-align: center;
`;

export const TitleBigger = styled.h1`
    font-size: 2rem;
    font-weight: bold;
    color: ${orange};
`;

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