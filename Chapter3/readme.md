<p align="center">
   <img src="../@assets/img/ignews.svg" alt="IG News" width="280"/>
</p>

> <b>ig.news</b> é o terceiro projeto criado no chapter 3 da trilha de React do Ignite da [Rocketseat](https://github.com/Rocketseat). O projeto consiste num blog onde para ler algum psoto você deverá ser assinante, e é usado a API do [Stripe](https://stripe.com/) para o controle de pagamento e salvando os dados dos inscritos no FaunaDB.

# :pushpin: Conteúdo

- [Tecnologias](#computer-tecnologias)
- [Executando](#construction_worker-executando)
- [Desafios](#atom_symbol-desafios)

# :computer: Tecnologias

Este projeto foi feito utilizando as seguintes tecnologias:

- [React](https://reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [NextJS](https://nextjs.org/)
- [FaunaDB](https://fauna.com/)'
- [Axios](https://github.com/axios/axios)
- [Prismic](https://prismic.io/)
- [Stripe](https://stripe.com/)
- [Sass](https://sass-lang.com/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)

# :construction_worker: Executando

```bash
# Clone o Repositório
$ git clone https://github.com/igorrochadasilva/rockeatseat-reactjs.git
```

```bash
# Acesse a pasta do projeto
$ cd Chapter3/ignews
```

```bash
# Crie um arquivo .env.local e configure as váriaveis de ambiente
# Stripe
STRIPE_API_KEY=
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=
STRIPE_API_PRICE_KEY=
STRIPE_WEBHOOK_SECRET=
STRIPE_SUCESS_URL=
STRIPE_CANCEL_URL=
# Github
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=
# FaunaDB
FAUNADB_KEY=
# Prismic CMS
PRISMIC_ENDPOINT=
PRISMIC_ACCESS_TOKEN=
```

```bash
# Baixe as dependendências
$ yarn
```

```bash
# Execute
$ yarn start
```

Acesse <http://localhost:3000> para ver o resultado.

# :atom_symbol: Desafios

[Desafio 5](https://github.com/igorrochadasilva/rocketseat-desafio-5): desafio criando um Blog utilizando NextJS e Prismic.
