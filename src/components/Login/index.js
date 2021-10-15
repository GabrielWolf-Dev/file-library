import React from 'react';

import Header from '../Header';
import Footer from '../Footer';

import {
    TitleBigger,
    SubTitleAuth,
    ContainerAuth,
    ContainerItemsRes,
    Form,
    Input,
    Button,
    BoxPlayerAnimation,
    BtnAuthSocial,
    IconAuthImg,
    Label,
    FieldSet
} from '../UI';
import secureLogin from '../../assets/svg/login-img.svg';
import faceIcon from '../../assets/svg/face-icon.svg';
import googleIcon from '../../assets/svg/google-icon.svg';

export default function Login() {
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
                    <Button type="submit">Logar</Button>
                </Form>
                <BoxPlayerAnimation>
                    <img
                        style={{ width: '100%', height: '280px' }}
                        src={secureLogin}
                        alt="Usuário fazendo o login de forma segura"
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
