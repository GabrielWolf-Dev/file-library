import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { FooterSection, Logo } from './style';
import { ContainerFlexBetween, SubContent } from '../UI';

export default function Footer() {
    const pathName = document.location.pathname;
    const [footerSectionStyle, setFooterSectionStyle] = useState({});
    
    useEffect(() => 
    pathName == '/register' || pathName == '/login'
    ? setFooterSectionStyle({
        position: 'absolute',
        bottom: '0'
    })
    : setFooterSectionStyle({
        position: 'initial',
        bottom: 'initial'
    }), [pathName]);

    return (
        <FooterSection style={{
            position: footerSectionStyle.position,
            bottom: footerSectionStyle.bottom
        }}>
            <ContainerFlexBetween>
                <Logo>File Library</Logo>
                
                <Link to="/credits">
                    <SubContent style={{ textDecoration: 'underline' }}>Creditos</SubContent>
                </Link>
            </ContainerFlexBetween>
        </FooterSection>
    );
}
