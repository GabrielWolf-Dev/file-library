import React from 'react';

import Header from '../Header';
import Footer from '../Footer';

import { TitleBigger } from '../UI';
import { ContainerCredits, ContentCredits, Img } from './style';

import copy from '../../assets/svg/copy.svg';

export default function Credits() {
    return (
        <>
            <Header />
            <TitleBigger
                style={{ margin: '48px 0' }}
            >Creditos</TitleBigger>

            <ContainerCredits>
                <Img
                    src={copy}
                    alt="Ilustração sobre Open Source e Copy"
                />

                <ContentCredits>
                    Neste projeto foi utilizado várias ilustrações, animações e imagens com licença gratuita.
                    Então como gratidão a toda comunidade, principalmente aos autores das obras utilizadas, esta página está destinada a atribuí-los:
                </ContentCredits>
            </ContainerCredits>
            <Footer />
        </>
    );
}
