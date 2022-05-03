## React Chapter 4

# 1. API Routes no Next.js

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

# 2. Usando Fauna DB

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
- 

