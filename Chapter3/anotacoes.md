## React Chapter 3

# 1. Estrutura da aplicação

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

# 2. Estrutura da aplicação

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

# 3. Integração com API

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
