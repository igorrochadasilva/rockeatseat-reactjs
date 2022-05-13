## React Chapter 3

# Fundamentos Next.js

## 1. Estrutura da aplicação

1. Introdução ao módulo

2. Fluxo da aplicação
- Stripe -pagamentos
- FaunaDB - Banco de dados aplicações servelers, rota da aplicação em ambiente isolado.
- Prismic CMS - CMS
- Github - Autenticação + OAuth
- Home -> Autenticação -> inscrição -> Stripe pagamentos -> Salvar informações da inscrição do usuario ->
FaunaDB <- Consumir posts <- Prismic

3. Fundamentos Next JS
- React a interface e chamadas API é feita pelo JS no browser do cliente
- SPA: Browser (Cliente) -> Código React(bundle.js) -- Usuários --> Backend(Servidor) -- JSON -->  Código React(bundle.js) -> interface <ul></li></ul>
- SSR: Browser (Cliente) -> Next.JS (Servidor Node.js) -> Código React(bundle.js) -- produtos --> Backend(Servidor) -- JSON --> Código React(bundle.js) -> interface <ul></li></ul> -> Next.JS (Servidor Node.js) -> Browser (Cliente)

- Há muitos motores de busca que não conseguem localizar as páginas por elas serem SPA, páginas construidas pelo browser.
- Com o advento do NEXTJS, pelo fato da geração da página ser feito do lado do servidor, os motores de busca veem a página inteira construida.

4. Criando estrutura Next.js
- a pasta pages só pode estar ou na raiz do projeto ou na pasta src.

5. Adicionando Typescript
- Instalando typescript e tipagens como dependencia no projeto.

6. Estilizando com SASS
- Todo arquivo terminado com module.css é um estilo scooped
- utilizando sass dentro do next js

7. Configurando fonte externa
- Para reproduzir algo em todas as páginas, passar no _app
- app sempre é executado em todas as páginas
- _document para conteudo carregando apenas vez

8. Title dinâmico por página
- Utilizando o Head para deixar head dinamico em cada página

9. Estilos globais do app
- criando estilo global.

## 2. Componentes e páginas

1. Componente: Header
- Inserçao do componente html no _app para aparecer em todas as páginas.
- Desenvolvendo Header componente.

2. Componente: SignInButton
- Criação de componente e estilização.
- Utilizando variavel de login estatico para identificar usuario logado ou deslogado no momento

3. Página Home
- criação e estilização de Home

4. Componente: SubscribeButton
- criação e estilização de Home

## 3. Integração com API

1. Configurando Stripe
- Stripe é uma companhia tecnológica. Seu software permite a indivíduos e negócios receber pagamentos por internet.
- https://dashboard.stripe.com/test/dashboard
- env.local
- env.production
- env.test
- existe varios env no next, ver documentação do next para mais detalhes

2. Consumindo API do Stripe (SSR)
- Criando chamada para API do Stripe
- Usando as chamadas de API no formato useEffect ocorre apenas no browser após a interface montada.
- Fazer chamada no servidor Next utilizando server side rendering
- Obs: caso a chamada dependa 2 seg para ser feita, a página demorará 2 seg para ser construida.
- O SSR funciona apenas em PÁGINAS.
- O getServerSideProps roda no servidor node.

3. Static Site Generation (SSG)
- Para páginas com conteudo que não mudam diariamente, utilizar static site generator.
- Apenas para páginas que o conteudo não muda!
- 3 formas
- client side - quando não é necessário indexação, ou depende de ação do usuário
- server side render - páginas com dados dinamicos, ex: sessão do usuário
- static site generation - html para compartilhar com todos, paginas estaticas que não mudam

- Post do blog
- conteudo SSG
- comentários (Client-side)


# BACK-END NO FRONT-END

## 1. API Routes no Next.js

**API routes no Next.js**
- Toda e qualquer informação no front é publica
- Com o next, em alguns momentos podemos fazer um backend no next.
- Com as API Routes, conseguimos criar as rotas e envio e busca de dados e tratativas desses dados no proprio node server do next
// Caso de USO LANDING PAGE
// newsletter chamada de apI no browser, é possivel pegar a rota e enviar os dados
// porem com API ROUTERS, é possivel deixar seguro o envio de dados
// todas as rotas elas são executadas utilizando o conceito de serverless

**Estratégias de autenticação**
- Usar token JWT salvo no Storage - estrategia comum
- Next Auth (Social) 
- Cognito, Auth0, providers de autenticação externo

**Parametrização nas rotas**
- Passando parametros na API ROUTES nomeando o arquivo como [...params].tsx

**Autenticação com Next Auth**
- instalação de next auth
- criando chaves de segurança no github que será o provedor
- Configurado NextAuth e provedor do github com clientId, clientSecret, authorization.
- Ao clicar no botão, é feito uma requisição para iniciar a sessão com o github, ao aceitar, é gravado nos cookies
- as informações da sessão. Com isso é finaliado a autenticação com Github.

## 2. Usando Fauna DB

**Escolhendo um banco de dados**
- Assim que o usuário se logar, cadastrar no BD
- FaunaDb é um BD principalmente para aplicações serveles. (ambiente ue servidor não fica rodando 24h)
- https://fauna.com/ - todas as operações dentro do Fauna DB sã através de HTTP.

- Fauna - Recomendado pela Vercel! - curva de aprendizado menor.
- DynamoDB - AWS. 
-----
- PostgreSQL, MongoDB - necessário ter conexão ativa. 
- DB 24h (1 conexão)
- 1000 autenticação (1000 conexão)

**Configurando FaunaDB**
- No securite do fauna, caso usar para produção, criar chaves corretas e suas responsabilidades.
- Criando DB ignews
- Criando collecton users
- Instalação de SDK do faunaDB com yarn add faunadb
- Criação de arquivo fauna, e configuração com secrect key do fauna.

**Configurações no Github**
- Atualizando Github.

**Salvando usuário no banco**
- todas as ações do api auth são executadas na camada do BACKEND logo irá aparecer somente no terminal.
- Utilizando callback do nextauth 
- Criando novo documento com fauna e suas funções
- https://docs.fauna.com/fauna/current/api/fql/functions/create?lang=shell

**Chave privada do JWT**
- Remoção de chave privada pois a geração dela seria trabalhosa, mas caso seja uma aplicação pra production, impressendivel.

**Verificando usuário duplicado**
- Criando validação para usuário não ser duplicado utilizando o proprio fauna e seus recursos!. (muito util :D )
 
 ## 3. Pagamentos no Stripe
 
**Gerando sessão de checkout** 
- Checkout session Stripe.
- Varivel de ambiente publica no Next: NEXT_PUBLIC_VARIABLE-NAME
- Sempre usar variaveis de ambiente nas APIs Routes se for para eventos após o carregamento da página.
- No nextauth/client, vamos usar o getSession.

**Redirecionando para o Stripe**
- Instalando o axios
- adicionando library @stripe/stripe-js para usar função redirectToCheckout.

**Evitando duplicação no Stripe**
- Utilizando FaunaDB para armazenar usuário criado no stripe
- Feito verificação no fauna para ver se usuário email está cadastrado lá, caso esteja cadastrado, cria checkout session do strip