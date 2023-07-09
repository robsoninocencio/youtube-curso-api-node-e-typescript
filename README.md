Comandos usados:
yarn init -y
yarn add express
yarn add -D typescript @types/express ts-node-dev
yarn add http-status-codes
yarn add dotenv

yarn tsc --init
yarn tsc

node ./build/index.js  
ou
node build

npx eslint --init

yarn ts-node-dev ./src/index.ts
yarn start

yarn add jest ts-jest @types/jest
yarn jest --init

yarn add -D supertest @types/supertest
yarn tsc

yarn add knex
yarn add sqlite -D

Repositório feito no curso:
📖 Repositório do projeto - https://github.com/robsoninocencio/youtube-curso-api-node-e-typescript

Links mencionados no vídeo:
📖 Repositório do projeto - https://github.com/lvsouza/youtube-curso-api-rest-node-e-typescript
🗨️ Discord - https://discord.gg/ZC7JrPZn7P
👍 Na @rocketseat um pouco mais sobre os métodos http: https://www.youtube.com/watch?v=ghTrp1x_1As

Outros curso no canal:
☪️ Curso de estilização no React - https://www.youtube.com/watch?v=oUbPkR799fc&list=PL29TaWXah3ibKagNSzwWuVc9_OheIxlcx
⭐️ Curso de React com typescript - https://www.youtube.com/watch?v=1bEbBkWc4-I&list=PL29TaWXah3iZktD5o1IHbc7JDqG_80iOm
👑 React, Material UI 5 e Typescript - https://www.youtube.com/watch?v=wLH1Vv86I44&list=PL29TaWXah3iaqOejItvW--TaFr9NcruyQ&pp=iAQB
🏆 Curso de API Rest, Node e Typescript - https://www.youtube.com/watch?v=SVepTuBK4V0&list=PL29TaWXah3iaaXDFPgTHiFMBF6wQahurP&pp=iAQB

Livros recomendados:
📘 Código limpo - https://1drv.ms/b/s!AoO90nFO1bLlhKJHPEszz1afTdfdNA?e=cXkpbM
📘 Arquitetura limpa - https://amzn.to/3SQOdUr
📘 Migrando sistemas monolíticos - https://amzn.to/3w6qEx0

Exemplos usados nos testes:

Fazer uma chamada a um método POST no inspecinar elemento do navegado no console:

```
fetch('http://localhost:3333/recurso', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    key1: 'value1',
    key2: 'value2'
  })
})
.then(response => response.json())
.then(data => {
  console.log(data);
})
.catch(error => {
  console.error(error);
});
```

Publicar a API na vercel:
https://www.youtube.com/watch?v=FZiza5N6BQU&t=2s
https://youtube-curso-api-node-e-typescript.vercel.app/cidades/1
