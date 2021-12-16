import React from 'react';

import {
    ProfileContainer,
    ImgUser,
    ContainerEmailGoogle,
    LabelEmail,
    ImgProfile
} from './style.js';
import { Content, TitleBigger } from '../UI';
import { useAuth } from '../../hooks/useAuth.js';

import profile from '../../assets/svg/profile.svg';

export default function Profile(){
    const { isAuth } = useAuth();

    return(
        <ProfileContainer>
            <TitleBigger style={{ padding: '48px 0' }}>Perfil</TitleBigger>
            {
                isAuth.providerData === 'google.com'
                ? (
                    <>
                        <ImgUser
                            src={isAuth.img}
                            alt={isAuth.name}
                        />

                        <Content
                            style={{
                                display: 'inline-block',
                                lineHeight: '42px',
                                verticalAlign: 'top'
                            }}
                        >{isAuth.name}</Content>

                        <ContainerEmailGoogle>
                            <LabelEmail>Email:</LabelEmail>
                            <Content style={{ display: 'inline-block' }}>{isAuth.email}</Content>
                        </ContainerEmailGoogle>
                    </>
                )
                : (<h1>COnta de SEnha!</h1>)
            }

            <ImgProfile
                src={profile}
                alt="Ilutração de um usuário acessando as configurações do seu perfil de uma plataforma"
            />
        </ProfileContainer>
    );
}