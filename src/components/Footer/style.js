import styled from 'styled-components';

import { blueDark, white, cianBlue } from '../UI/colors';

export const FooterSection = styled.footer`
    width: 100%;
    min-height: 40px;
    padding: 20px 2%;
    background-color: ${blueDark};
`;

export const Logo = styled.h4`
    font-size: 1rem;
    font-weight: lighter;
    font-style: italic;
    color: ${white};
`;

export const CreditsLink = styled.a`
    color: ${white};
    font-size: 1rem;
    font-weight: lighter;
    text-decoration: underline;
    transition: all ease-out .2s;

    &:hover {
        color: ${cianBlue};
    }
`;