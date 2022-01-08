# [File Library](https://file-library-428bb.web.app/) 📁 ☁️
File Library é um armazenador de arquivos como o Google Drive e Dropbox, destinado para desenvolver uma aplicação completa com Firebase e React Js.
Nesta aplicação você pode armazenar uma série de tipos de arquivos como fotos, pdf, documentos, vídeos e áudios, podendo se ligar com uma conta do Google, a partir do Google Authentication do Firebase, ou com email e senha.
<br>
Caso o usuário opte por fazer uma conta com email e senha, ele pode alterar o nome, a foto de perfil, que por padrão é um ícone de usuário, e o email(O email só é válido caso o usuário tenha logado recentemente a conta).


## O que eu aprendi: 📖
Neste projeto, aprendi muito sobre a ferramenta do Firebase e suas principais funcionalidades como aplicação de regras de segurança, Firebase Hoisting, Cloud FireStore, Storage, Authentication e algumas validações no Front para que possa inserir os arquivos destinados no banco de dados do Firebase, como a validação do tipo de arquivo que é valido para o upload.

## Configuração: ⚙️

**Importante! -- Instale o [Node Js](https://nodejs.org/en/) junto com npm para que você consiga gerenciar os pacotes e rodar o React JS**
1. Clone o projeto: ``` git clone git@github.com:GabrielWolf-Dev/file-library.git ```;
2. Instale os pacotes: ``` npm install ```;
3. Configure o .env(Variáveis dos dados sigilosos do [Firebase](https://firebase.google.com/), eles são providos a partir do momento que você cria um projeto), você pode acessar vendo o script ["firebase.js"](https://github.com/GabrielWolf-Dev/file-library/blob/main/src/firebase.js) do projeto.
4. Atualize pacotes(Opcional): ``` npm audit fix ```;
5. Inicie o servidor React: ``` npm start ```.


# A Documentação do projeto está em desenvolvimento...
## Para mais detalhes, acesse [Projects -- Challenges FIle Library](https://github.com/GabrielWolf-Dev/file-library/projects/1)