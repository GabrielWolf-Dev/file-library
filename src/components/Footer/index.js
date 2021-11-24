import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { FooterSection, Logo } from './style';
import { ContainerFlexBetween, SubContent } from '../UI';

export default function Footer() {
    const [footerSectionStyle, setFooterSectionStyle] = useState({});
    const widthWindow = window.innerWidth;
    const pathName = document.location.pathname;
    const isDesktopPageRegLog = widthWindow >= 768 && (pathName === '/register' || pathName === '/login');

    useEffect(() => 
        isDesktopPageRegLog
    ? setFooterSectionStyle({
        position: 'absolute',
        bottom: '0'
    })
    : setFooterSectionStyle({
        position: 'initial',
        bottom: '0'
    }), [pathName, isDesktopPageRegLog]);
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
