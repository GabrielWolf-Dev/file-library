import React from 'react';
import Header from '../Header';

import cloudFile from '../../assets/svg/cloud-files.svg';
import { TitleBigger } from '../UI';
import {
    ContainerSection,
    ImgSection,
    ContentSection
} from './style';

export default function Home(){
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
        </>
    );
}