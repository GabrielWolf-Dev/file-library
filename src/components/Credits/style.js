import styled from 'styled-components';
import { Container, Content } from '../UI';

export const ContainerCredits = styled(Container)`
    margin: 48px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column-reverse;
    text-align: left;

    @media (min-width: 768px) {
        justify-content: space-evenly;
        flex-direction: initial;
    }
`;

export const ContentCredits = styled(Content)`
    max-width: 240px;

    @media (min-width: 468px) {
        max-width: 400px;
    }

    @media (min-width: 768px) {
        max-width: 600px;
    }
`;

export const Img = styled.img`
    width: 80%;
    padding: 0 2%;
    margin-top: 32px;

    @media (min-width: 768px) {
        width: 100%;
    }
`;
