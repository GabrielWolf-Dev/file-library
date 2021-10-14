import React from 'react';
import { Link } from 'react-router-dom';

import { FooterSection, Logo, CreditsLink } from './style';
import { ContainerFlexBetween } from '../UI';

export default function Footer() {
    return (
        <FooterSection>
            <ContainerFlexBetween>
                <Logo>File Library</Logo>
                
                <Link to="/credits">
                    <CreditsLink>Creditos</CreditsLink>
                </Link>
            </ContainerFlexBetween>
        </FooterSection>
    );
}
