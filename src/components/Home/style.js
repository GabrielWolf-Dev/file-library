import styled from "styled-components";

import { ContainerFlexBetween, Content } from '../UI';

const ContainerSection = styled(ContainerFlexBetween)`
    flex-direction: column;
    gap: 24px;
    margin: 48px auto;

    @media (min-width: 768px) { flex-direction: row; justify-content: space-evenly; }
`;

const ImgSection = styled.img`
    width: 100%;
    max-width: 400px;
    padding: 0 2%;
`;

const ContentSection = styled(Content)`
    margin-top: 16px;
    text-align: left;

    @media (min-width: 1000px) {
        width: 100%;
        max-width: 400px;
    }
`;

export {
    ContainerSection,
    ImgSection,
    ContentSection
};