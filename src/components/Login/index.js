import React from 'react';
import { Redirect } from 'react-router-dom';
import { filterXSS } from 'xss';
import { auth } from '../../firebase';
import { useAuth } from '../../hooks/useAuth';

import Header from '../Header';
import Footer from '../Footer';

import {
    TitleBigger,
    SubTitleAuth,
    ContainerForm,
    ContainerItemsRes,
    Form,
    Input,
    Button,
    BoxPlayerAnimation,
    BtnAuthSocial,
    ContentBtnAuth,
    IconAuthImg,
    Label,
    FieldSet
} from '../UI';
import secureLogin from '../../assets/svg/login-img.svg';
import googleIcon from '../../assets/svg/google-icon.svg';

export default function Login() {
    const [isAuth, setIsAuth] = useAuth();

    function signIn(event){
        event.preventDefault();
        const form = event.target;

        const datas = new FormData(form);
        const email = filterXSS(datas.get('email'));
        const pass = filterXSS(datas.get('pass'));

        const isEmptyInputs = email !== '' || pass !== '';

        if(isEmptyInputs)
            auth.signInWithEmailAndPassword(email, pass)
            .then((user) => {
                setIsAuth({
                    name: user.displayName,
                    email: user.email,
                    img: user.photoURL,
                    uid: user.uid
                });
                alert('Login realizado com sucesso!');

                form.reset();
            })
            .catch((error) => {
                console.error(error.code);
                console.log(error.message);
                // Printar mensagem de erro
                alert("Erro ao logar-se");
            });
        else
            alert('Campos vazios!');
        
    }
    return (
        Object.keys(isAuth).length !== 0 ? (
            <Redirect to={{ pathname: '/dashboard'}} />
            ) : (
                <>
                    <Header />
                    <TitleBigger style={{ marginTop: '48px' }}>Login</TitleBigger>
                    <ContainerItemsRes>
                        <ContainerForm>
                            <Form onSubmit={signIn}>
                                <FieldSet>
                                    <Label htmlFor="email">E-mail</Label>
                                    <Input
                                        required
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="E-mail"
                                    />
                                </FieldSet>
                                <FieldSet>
                                    <Label htmlFor="pass">Senha</Label>
                                    <Input
                                        required
                                        id="pass"
                                        type="password"
                                        name="pass"
                                        placeholder="Senha"
                                    />
                                </FieldSet>
                                <Button type="submit">Logar</Button>
                            </Form>
                            
                            <SubTitleAuth>Ou</SubTitleAuth>
                            <BtnAuthSocial>
                                <ContentBtnAuth>
                                    Fazer login com

                                    <IconAuthImg
                                        src={googleIcon}
                                        alt="Ícone do Google provida pelo Font Awesome"
                                    />
                                </ContentBtnAuth>
                            </BtnAuthSocial>
                        </ContainerForm>

                        <BoxPlayerAnimation>
                            <img
                                style={{ width: '100%', height: '280px' }}
                                src={secureLogin}
                                alt="Usuário fazendo o login de forma segura"
                            />
                        </BoxPlayerAnimation>
                    </ContainerItemsRes>
                    <Footer />
                </>
            )
    )
}
