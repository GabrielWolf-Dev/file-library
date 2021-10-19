import React from 'react';
import Slider from "react-slick";
import { Player } from '@lottiefiles/react-lottie-player';
import { Link } from 'react-router-dom';

import {
    Container,
    LineMobile,
    TitleBigger,
    SubTitle
} from '../UI';
import {
    ContainerSection,
    ImgSection,
    ContentSection,
    BtnMobile,
    ImgSectionDesktop,
    BtnDesktop,
    BgAlternativeSections,
    AnimationContainer,
    ContainerDots,
    ListDots,
    Dots
} from './style';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cloudFile from '../../assets/svg/cloud-files.svg';
import secureFile from '../../assets/svg/secure-files.svg';
import registerLoginAcccount from '../../assets/svg/register-account.svg';

import Header from '../Header';
import Footer from '../Footer';

export default function Home(){
    const settings = {
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: dots => (
            <ContainerDots>
                <ListDots>{dots}</ListDots>
            </ContainerDots>
        ),
        customPaging: i => <Dots>{i}</Dots>
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
                    <Slider {...settings} style={{ padding: '24px 0' }}>
                        <AnimationContainer>
                            <Player
                                autoplay
                                loop
                                style={{ height: '300px', width: '100%' }}
                                src="https://assets1.lottiefiles.com/packages/lf20_bHVEVT.json"
                          />

                          <SubTitle>Logou</SubTitle>
                        </AnimationContainer>

                        <AnimationContainer>
                            <Player
                                autoplay
                                loop
                                
                                style={{ height: '300px', width: '100%' }}
                                src="https://assets6.lottiefiles.com/packages/lf20_jgL75c.json"
                            />

                            <SubTitle>Acessou</SubTitle>
                        </AnimationContainer>
                        
                        <AnimationContainer>
                            <Player
                                autoplay
                                loop
                                style={{ height: '300px', width: '100%' }}
                                src="https://assets5.lottiefiles.com/packages/lf20_GxMZME.json"
                            />

                            <SubTitle>Armazenou!</SubTitle>
                        </AnimationContainer>
                    </Slider>
                </Container>
            <LineMobile />
            <BgAlternativeSections>
                <ContainerSection>
                    <div>
                        <TitleBigger>Não criou uma conta?</TitleBigger>
                        <ContentSection>Clique no botão abaixo para ter o seu primeiro acesso com a plataforma :)</ContentSection>
                        <Link to="/register">
                            <BtnDesktop>Registrar-se</BtnDesktop>
                        </Link>
                    </div>
                    <BtnMobile>Registrar-se</BtnMobile>
                    <ImgSectionDesktop src={registerLoginAcccount} alt="Tela de fazer registro/login da plataforma" />
                </ContainerSection>
            </BgAlternativeSections>
            <Container style={{ margin: '48px auto' }}>
                <AnimationContainer>
                    <Player
                        autoplay
                        loop
                        style={{ height: '300px', width: '100%' }}
                        src="https://assets9.lottiefiles.com/private_files/lf30_ig1wfilw.json"
                    />
                </AnimationContainer>
            </Container>
            <Footer />
        </>
    );
}