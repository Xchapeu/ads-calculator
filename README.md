<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-executar">Como executar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>

## ✨ Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [React](https://reactjs.org)
- [TypeScript](https://www.typescriptlang.org/)

## 💻 Projeto

Um Sistema de cadastro de anúncios, que cadastra e mostra uma projecão de quantidade de visualizações, cliques e compartilhamentos baseado no valor investido.

## 🚀 Como executar

- Clone o repositório
- Dentro da pasta `backend`, rode o `yarn dev` ou `npm dev` para iniciar o servidor.
- Por fim, o servidor estará disponível em `http://localhost:3333`.
- Volte a raiz do projeto e dentro da pasta `frontend`, rode `yarn start` ou `npm start`.
- O navegador irá abrir uma guia com a `page landing` "Cadastre seu anúncio", clique no botão da parte inferior direita para ser direcionado a página de cadastro de anuncios.
- Depois de preenchidos os campos e enviados os dados no clique do `Cadastrar`, o usuário será direcionado para a pagina de anuncios [`localhost:3000/anuncios`](http://localhost:3000/anuncios) que trará a lista de anuncios com os detalhes e relatórios.
- O anuncio se clicado leva a tela do anuncio individual ou o mesmo pode ser acessado via barra de endereço,
[`localhost:3000/anuncios/:id`](http://localhost:3000/anuncios/:id), com o parâmetro id sendo substituído pelo respectivo id do anuncio.


