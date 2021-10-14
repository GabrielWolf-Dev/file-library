import React from 'react';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Header from '../Header';
import cloudFile from '../../assets/svg/cloud-files.svg';
import secureFile from '../../assets/svg/secure-files.svg';
import registerLoginAcccount from '../../assets/svg/register-account.svg';

import {
    Container,
    LineMobile,
    TitleBigger,
} from '../UI';
import {
    ContainerSection,
    ImgSection,
    ContentSection,
    BtnMobile,
    ImgSectionDesktop,
    BtnDesktop,
    BgAlternativeSections
} from './style';


export default function Home(){
    const settings = {
        dots: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return(
        <>
            <Header />
            <ContainerSection>
                <div>
                    <TitleBigger>File Library</TitleBigger>
                    <ContentSection>File Library é um armazenador de arquivos cloud, desenvolvido com React Js e Firebase para fins de estudo e portfólio</ContentSection>
                </div>
                <ImgSection src={cloudFile} alt="Computador fazendo upload de arquivo no Cloud" />
            </ContainerSection>
            <LineMobile />
            <BgAlternativeSections>
                <ContainerSection>
                    <div >
                        <TitleBigger>Armazenamento Ilimitado!</TitleBigger>
                        <ContentSection>Armazene os seus arquivos de forma segura e rápida, sem se preocupar com o espaço!</ContentSection>
                    </div>
                        <ImgSection src={secureFile} alt="Arquivos seguros e protegidos" />
                </ContainerSection>
            </BgAlternativeSections>
            <LineMobile />
                <Container style={{ margin: '48px auto' }}>
                    <TitleBigger>Prezamos pela simplicidade!</TitleBigger>
                    <Slider {...settings}>
                        <div>teste</div>
                        <div>teste</div>
                        <div>teste</div>
                    </Slider>
                </Container>
            <LineMobile />
            <BgAlternativeSections>
                <ContainerSection>
                    <div>
                        <TitleBigger>Não criou uma conta?</TitleBigger>
                        <ContentSection>Clique no botão abaixo para ter o seu primeiro acesso com a plataforma :)</ContentSection>
                        <BtnDesktop>Registrar-se</BtnDesktop>
                    </div>
                    <BtnMobile>Registrar-se</BtnMobile>
                    <ImgSectionDesktop src={registerLoginAcccount} alt="Tela de fazer registro/login da plataforma" />
                </ContainerSection>
            </BgAlternativeSections>
        </>
    );
}