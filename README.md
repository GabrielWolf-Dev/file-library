![Desktop Version Dashboard Image](https://github.com/GabrielWolf-Dev/file-library/blob/main/src/assets/img/desktop-dash.png?raw=true)

# [File Library](https://file-library-428bb.web.app/) 📁 ☁️
File Library é um armazenador de arquivos como o Google Drive e Dropbox, destinado para desenvolver uma aplicação completa com Firebase e React Js.
Nesta aplicação você pode armazenar uma série de tipos de arquivos como fotos, pdf, documentos, vídeos e áudios, podendo se ligar com uma conta do Google, a partir do Google Authentication do Firebase, ou com email e senha.
<br>
Caso o usuário opte por fazer uma conta com email e senha, ele pode alterar o nome, a foto de perfil, que por padrão é um ícone de usuário, e o email(O email só é válido caso o usuário tenha logado recentemente a conta).


## O que eu aprendi: 📖
Neste projeto, aprendi muito sobre a ferramenta do Firebase e suas principais funcionalidades como aplicação de regras de segurança, Firebase Hoisting, Cloud FireStore, Storage, Authentication e algumas validações no Front para que possa inserir os arquivos destinados no banco de dados do Firebase, como a validação do tipo de arquivo que é valido para o upload.

![Desktop Version Dashboard Image](https://github.com/GabrielWolf-Dev/file-library/blob/main/src/assets/img/mobile-dash.png?raw=true)

## Configuração: ⚙️

**Importante! -- Instale o [Node Js](https://nodejs.org/en/) junto com npm para que você consiga gerenciar os pacotes e rodar o React JS**
1. Clone o projeto: ``` git clone git@github.com:GabrielWolf-Dev/file-library.git ```;
2. Instale os pacotes: ``` npm install ```;
3. Configure o .env(Variáveis dos dados sigilosos do [Firebase](https://firebase.google.com/), eles são providos a partir do momento que você cria um projeto), você pode acessar vendo o script ["firebase.js"](https://github.com/GabrielWolf-Dev/file-library/blob/main/src/firebase.js) do projeto.
4. Atualize pacotes(Opcional): ``` npm audit fix ```;
5. Inicie o servidor React: ``` npm start ```.

## Tecnologias e Ferramentas: 🧰

* HTML 5;
* React Js
    * Styled-Components;
    * React Router;
    * Lottie Files;
    * React Slick(Slide) & Slick Carousel;
    * Material UI;
    * Webpack;
    * Babel.
* Firebase
    * Firestore Database;
    * Authentication;
    * Storage;
    * Hoisting.
* Figma[(Link da UI do projeto)](https://www.figma.com/file/pPMq7vEIRDJkr2fKZAILu3/File-Library?node-id=0%3A1)
* Mobile First;
* Biblioteca ["xss"](https://www.npmjs.com/package/xss) para sanitizar inputs;
* Assets em [Pixabay](https://pixabay.com/pt/), [Lottie Files](https://lottiefiles.com/), [unDraw](https://undraw.co/) e [Material UI Icons](https://fonts.google.com/icons?selected=Material+Icons).

## Meus desafios: 🎯
- Desenvolver um Dashboard, mesmo que simples, de forma responsiva, pois não estou acostumado em desenvolver Dashboards;
- Desenvolver em "Mobile First", pois estou acostumado a desenvolver primero para telas grandes e depois para telas menores, mas percebi que o conceito de "Mobile First" é melhor pelo fato da readaptação de pequenas para o grandes telas ser mais fácil, entretanto eu necessito aplicar mais para perceber os prós e contras de se desenvolver primeiro o layout das telas pequenas. 🤔;
- ⚠️ Durante o desenvolvimento do projeto, acabei me deparando com vários problemas de performance por conta do meu código em React Js, principalmente com o mal uso dos Ract Hooks, onde alguns foram solucionados e outros não infelizmente, sendo assim necessito de ajuda e/ou vou aprofundando no React até achar a solução do problema.
- Utilizar o Firebase, por conta de ser o meu 1º projeto que estou levando a sério e que foi colocado no ar com o Firebase Hoisting, onde eu aprendi muito e consegui colocar tudo que vi no curso da "Danki Code -- Firebase" na prática.

### Acesse a página de ["Projects"](https://github.com/GabrielWolf-Dev/file-library/projects/1) do projeto para saber, com mais detalhes, tudo o que está acontecendo com o projeto e os objetivos que foram concluídos ao longo do desenvolvimento.

## Demonstração do projeto:
![Gif File Library](https://github.com/GabrielWolf-Dev/file-library/blob/main/src/assets/file-library.gif?raw=true)
