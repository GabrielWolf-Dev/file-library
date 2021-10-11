import styled from "styled-components";

import { ContainerFlexBetween, Content, Button } from '../UI';
import { blueDark, white } from "../UI/variables";

const ContainerSection = styled(ContainerFlexBetween)`
    flex-direction: column;
    gap: 24px;
    margin: 48px auto;

    @media (min-width: 768px) {
        text-align: left;
        flex-direction: row;
        justify-content: space-evenly;
    }
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

const BgAlternativeSections = styled.div`
    width: 100%;
    background-color: ${white};
    color: ${white};

    @media (min-width: 768px) {
        background-color: ${blueDark};
        padding: 24px 0;
    }
`;

const BtnMobile = styled(Button)`
    @media (min-width: 768px) { display: none; }
`;

const BtnDesktop = styled(Button)`
    display: none;

    @media (min-width: 768px) { display: block; }
`;

const ImgSectionDesktop = styled(ImgSection)`
    display: none;

    @media (min-width: 768px) { display: block; }
`;

export {
    ContainerSection,
    ImgSection,
    ContentSection,
    BtnMobile,
    ImgSectionDesktop,
    BtnDesktop,
    BgAlternativeSections
};