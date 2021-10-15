import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

import Header from '../Header';
import Footer from '../Footer';

import { 
    ContainerAuth,
    ContainerItemsRes,
    TitleBigger,
    SubTitleAuth,
    Input,
    Form,
    Button,
    BtnAuthSocial,
    IconAuthImg,
    BoxPlayerAnimation,
    FieldSet,
    Label
 } from '../UI';
import faceIcon from '../../assets/svg/face-icon.svg';
import googleIcon from '../../assets/svg/google-icon.svg';

export default function Register() {
    return (
        <>
            <Header />
            <TitleBigger style={{ marginTop: '48px' }}>Register Page!</TitleBigger>
            <ContainerItemsRes>
                <Form>
                    <FieldSet>
                        <Label htmlFor="email">E-mail</Label>
                        <Input 
                            type="email"
                            id="email"
                            placeholder="E-mail"
                        />
                    </FieldSet>
                    <FieldSet>
                        <Label htmlFor="pass">Senha</Label>
                        <Input
                            id="pass"
                            type="password"
                            placeholder="Senha"
                        />
                    </FieldSet>
                    <Button type="submit">Registrar</Button>
                </Form>
                <BoxPlayerAnimation>
                    <Player
                        style={{ width: '100%', height: '280px' }}
                        loop
                        autoplay
                        src="https://assets8.lottiefiles.com/packages/lf20_jcikwtux.json"
                    />
                </BoxPlayerAnimation>
            </ContainerItemsRes>
            <ContainerAuth>
                <SubTitleAuth>Ou</SubTitleAuth>
                <BtnAuthSocial>
                    <IconAuthImg
                        src={faceIcon}
                        alt="Ícone do Facebook provida pelo Font Awesome"
                    />
                </BtnAuthSocial>
                <BtnAuthSocial>
                    <IconAuthImg
                        src={googleIcon}
                        alt="Ícone do Google provida pelo Font Awesome"
                    />
                </BtnAuthSocial>
            </ContainerAuth>
            <Footer />
        </>
    )
}
