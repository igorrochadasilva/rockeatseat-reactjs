## React Chapter 3

# Fundamentos Next.js

## 1. Estrutura da aplicação

**Introdução ao módulo**

**Fluxo da aplicação**
- Stripe -pagamentos
- FaunaDB - Banco de dados aplicações servelers, rota da aplicação em ambiente isolado.
- Prismic CMS - CMS
- Github - Autenticação + OAuth
- Home -> Autenticação -> inscrição -> Stripe pagamentos -> Salvar informações da inscrição do usuario ->
FaunaDB <- Consumir posts <- Prismic

**Fundamentos Next JS**
- React a interface e chamadas API é feita pelo JS no browser do cliente
- SPA: Browser (Cliente) -> Código React(bundle.js) -- Usuários --> Backend(Servidor) -- JSON -->  Código React(bundle.js) -> interface <ul></li></ul>
- SSR: Browser (Cliente) -> Next.JS (Servidor Node.js) -> Código React(bundle.js) -- produtos --> Backend(Servidor) -- JSON --> Código React(bundle.js) -> interface <ul></li></ul> -> Next.JS (Servidor Node.js) -> Browser (Cliente)

- Há muitos motores de busca que não conseguem localizar as páginas por elas serem SPA, páginas construidas pelo browser.
- Com o advento do NEXTJS, pelo fato da geração da página ser feito do lado do servidor, os motores de busca veem a página inteira construida.

**Criando estrutura Next.js**
- a pasta pages só pode estar ou na raiz do projeto ou na pasta src.

**Adicionando Typescript**
- Instalando typescript e tipagens como dependencia no projeto.

**Estilizando com SASS**
- Todo arquivo terminado com module.css é um estilo scooped
- utilizando sass dentro do next js

**Configurando fonte externa**
- Para reproduzir algo em todas as páginas, passar no _app
- app sempre é executado em todas as páginas
- _document para conteudo carregando apenas vez

**Title dinâmico por página**
- Utilizando o Head para deixar head dinamico em cada página

**Estilos globais do app**
- criando estilo global.

## 2. Componentes e páginas

**Componente: Header**
- Inserçao do componente html no _app para aparecer em todas as páginas.
- Desenvolvendo Header componente.

**Componente: SignInButton**
- Criação de componente e estilização.
- Utilizando variavel de login estatico para identificar usuario logado ou deslogado no momento

**Página Home**
- criação e estilização de Home

4. Componente: SubscribeButton
- criação e estilização de Home

## 3. Integração com API

**Configurando Stripe**
- Stripe é uma companhia tecnológica. Seu software permite a indivíduos e negócios receber pagamentos por internet.
- https://dashboard.stripe.com/test/dashboard
- env.local
- env.production
- env.test
- existe varios env no next, ver documentação do next para mais detalhes

**Consumindo API do Stripe (SSR)**
- Criando chamada para API do Stripe
- Usando as chamadas de API no formato useEffect ocorre apenas no browser após a interface montada.
- Fazer chamada no servidor Next utilizando server side rendering
- Obs: caso a chamada dependa 2 seg para ser feita, a página demorará 2 seg para ser construida.
- O SSR funciona apenas em PÁGINAS.
- O getServerSideProps roda no servidor node.

**Static Site Generation (SSG)**
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

 ## 4. Ouvindo Webhooks
 
**Webhooks do Stripe**
- Quando uma aplicação terceira avisa nossa aplicação que algum evento aconteceu.
- Utilizando o CLI do stripe para fazer o trabalho de weebhooks e informar sobre os eventos ocorridos na aplicação terceira.

**Ouvindo eventos do Stripe**
- Pegando dados a partir dos eventos do Stripe.
- Criando função buffer para concatenar chunk e retornar array de chunks.
- Criando retorno de quais eventos são relevantes que precisamos ouvir.

**Salvando dados do evento**
- Buscar usuário pelo customerId, necessário criação de indice
- Salvando subscription no FaunaDB.

**Ouvindo mais eventos**
- Eventos essenciais que precisamos ouvir: 
- - customr.subscriptions.created
- - customer.subscriptions.updated
- - customer.subscriptions.deleted
- Ouvindo eventos de stripe para criar e ativar subscription no FaunaDB ou cancelar.

# FRONT-END JAMSTACK

## Trabalhando com CMS

**Escolhendo um CMS**
JAMStack
- Javascript 
- API 
- Markup
---------------------------
CMS (Content Management System)
- Wordpress 
x Drupal
x Joomla
x Magento (E-commerce)

Headless CMS (Painel de administração + API HTTP , GraphQL, SDK)

- Strapi 
- Ghost (Blog) Usar para blog, confia
- Keystone 

- GraphCMS
- Prismic CMS - a precificação do Prismic é melhor comparado com os outros 2
- Contentful

- Shopify (Ecommerce) confia
- Saleor

**Configurando Prismic CMS**
- Criando novo projeto no prismic.
- Criando template de posts para utilizar na criação de posts no CMS do prismic.
- Instalando dependencias.
- Criando posts com template criado.

**Página: Posts**
- Criação de página de posts
- Estilização de página de posts

**Consumindo API do Prismic**
- Utilizando https://prismic.io/docs
- Criando service prismic para fazer conexão com API do prismic
- Utilizando getStaticProps para busca de posts

**Listando posts em tela**
-  Formatação de dados recebidos de API do prismic, data , preço e ate texto, logo apos consumir os dados da API externa
- yarn add pismisc-dom para utilizar a função RichText que é um conversor do formato prismic para texto ou html

**Navegação no menu**
- Quando vc deixa um href com ancora ele recarrega a aplicação inteira novamente.
- Utilizar o Link do next/link, para utilizar o conceito de SPA, apenas alterando os componentes
- prop prefetch do Link que deixa a página já carregada antes mesmo de acessar.

**Componente: ActiveLink**
- useRouter para acessar o asPath que tras a rota atual.
- Criação de componente ActiveLink para ativar link quando url atual for igual ao href.
- Utilizando o cloneElement do React para clonar o children e passar a className.

## Páginas estáticas
**Página: Post**
- Criando página de Post com parametros dinamicos
- Toda página que é gerada de forma estática é uma página que não é protegida
- Utilizando o getServerSideProps para fazer busca do post no prismic e retornar para a página.
- Utilizando o dangerouslySetInnerHTML para renderizar o content do post que contem html

**Validando assinatura ativa**
- No nextAuth, utilizado fauna para buscar usuário por email e ver se é inscrito.
- Apos verificar se usuario está inscrito, retornar session e validar na pagina do post no getServerSideProps se usuario esta inscrito
- Utilizando o redirect destination do getServerSideProps. (Muito util!)
- Validando se já não é inscrito no botão subscribe

**Página: Preview do post**
- Criando pagina de preview.
- Na pagina de preview, não precisamos verificar se o usuário está inscrito ou não, logo iremos utilizar getStaticProps.
- Criando estilização de botão de redirect para home e esconder conteudo.
- Utilizando o splice para trazer menos conteudo do prismic

**Gerando previews estáticos**
- Gerar paginas estaticas durante a build. Para um cenário de 30 categoria ok, mas para 1000 produtos iria demorar muito
- Gerar a página estática no primeiro acesso.
- Metade de cada uma das formas de gerar.
- O getStaticPaths retorna quais previes de posters vamos gerar durante a build
- O getStaticPaths só existe em páginas que tem parametros dinamicos [param].tsx.
-  A opção fallback do getStaticPaths pode receber 3 valores, true, false e blocking
- true: carrega o conteudo pelo lado browser, lado do cliente. Problema com SEO.
- false: se o post não foi gerado de forma estatica ainda, ele retorna 404. (mais recomendado)
- blocking: é semelhante ao fallback true, carrega o conteudo novo na camada do next serverSideRender. (mais recomendado)

**Finalização do módulo**