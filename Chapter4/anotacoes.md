## React Chapter 4

# Construindo Interfaces do futuro

## 1. Configurando projeto

**Introdução ao módulo**

- Utilizar Crakra UI para construir interfaces do futuro com está biblioteca
- Desenvolver dashboard administrativo, com usuário, perfil, login e gráficos

**Interface declarativa**

- Interface declarativa, definir estilização dos elementos pela tag do JSX, a primeira foi theme UI.
- tailwind css, biblioteca de estilização declarativa
- https://chakra-ui.com/guides/first-steps

**Criando projeto Next.js**

- Criando projeto com yarn create next-app dashgo, e instalando typescript.

**Configurando Crakra UI**

- Tudo do chakra é construido em cima do emotion
- Instalando framer-motion, emotion/react e emotion/styled
- Sempre utilizar cores por variaveis
- Configurando cores no theme.ts

**Configurando fonte**

- Importação de fonts do google e inserção no theme.tsx

## 2. Login e dashboard

**Página: Sign in**

- Criando componente Sign in, estilizando com o chakra ui

**Componente: Input**

- Criando componente Input para reutilizar quando necessário, interessante o uso do InputProps do chakra ui

**Criando Header**

- Criando componente Header e estilizando.
- Instalação de react-icons para utilizar os icones junto com o chakra ui

**Finalizando Header**

- Utilizando Hstack, Avatar e Box do chakra ui.

**Componente: Sidebar**

- Criação de componente sidebar e estilização.

**Página: Dashboard**

- Criação de componente dashboard grid e estilização.
- Lib Apexchart para graficos
- Utilizando o dynamic do next js para aplicar o efeito de lazy load no Chart, passando a prop ssr como false
- false significa que o chart só vai ser carregado pelo lado do browser e nunca do servidor, de modo que o window exista para o chart.
- https://apexcharts.com/docs/react-charts/

## 3. Controle de usuários

**Lista de usuarios**

- Criação de página de usuários e tabela usando chakra ui

**Componente: Pagination**

- Criação e estilização de componente com chakra ui

**Página: Form de usuário**

- Criação e estilização de página criação de usuário com chakra ui

## 4. Responsividade

**Separando componentes**

- Componentizando os elementos da página, separando em componentes para Header, Sidebar e Pagination

**Responsividade no Chakra**

- Utilizando o breakPoint do chakra ui para trabalhar com responsividade e a sintaxe de array e possivel object tambem.
- hook breakPointValue para definir valores a partir do tamanho da tela

**Header responsivo**

- Utilizando o useBreakpointValue para trabalhar com a responsividade do header

**Sidebar responsiva**

- Criando contexto para menu drawer e utilizando useDisclosure do chakra ui para controlar eventos do drawer da sidebar

**Dashboard resposivo**

- Utilizando sintaxe de array de props passadas para componente no dashboard

**Listagem responsiva**

- Deixando table responsiva

**Cadastro responsivo**

- Deixando cadastro responsiva

**Fluxo de navegação**

- Implementando Link do Next para navegação entre páginas

**Sinalizando link ativo**

- Implementando sinalizar de link ativo utilizando o useRouter, LinkProps e startsWith para identificar inicio de rota

## 5 . Formulários e validação

**Formulários no React**

- Controled component: monitorar cada campo do formulário e atualizar o estado do componente (mais trabalhosa para muitos campos)
- Uncontrolled component: Acessar o valor do input somente quando precisar, utilizando o ref.
- react hook form

**Atualização React Hook Form**

**Form de Altenticação**

- Utilizando o forwardRef para fazer um encaminhamento da ref passada.
- Utilizando o reaft hook form
- Utilizando o formState para verificar o estado do submit

**Validação dos dados**

- Utilizando o yup para validação de dados atraves de schema. (Muito legal xD )

**Form de criação de usuários**

- Utilizando o react hook form e yup para validar os campos do formulário e submit o formulário.

**Encerramento do módulo**

# Data fetching e cache local

## 1. Conceitos do React Query

**Data fetching no React**

- Utilizando o React query para busca de dados

**Configurando MirageJS**

- Configurando mirage js para prover uma api enquanto não temos um backend.
- Com o "Partial" indica que não necessáriamente precisa ter todos os campos declarados no type.

**Factories e seeds**

- Utilizando o factories para criação de dados em massa (muito massa : D )
- Faker, biblioteca de geração de dados ficticios

**Configurando React Query**

- Configurando o React Query, englobando os componentes com provider dele
- utilizando useQuery para pegar os dados de determinada rota.

**Listagem de usuários**

- Listando os usuários com o use Query, atraves do retorno do data.
- funcionade padrão: stale while revalidate -> obsoleto enquanto revalida, quando a listagem de dados é armazenada em cash
  o react query mostra as versões mais atuais, por baixo dos panos, ele vai revalidar os dados, caso exista versões novas, ele atualiza os dados.
- revalidade on focus: é feito uma revalidação dos dados, quando o usuário sai da janela e volta.

**Configurando DevTools**

- Utilizando o ReactQueryDevtools para exibir as querys que foram feitos, que estão em cash, forçar querys e ter uma visão dos estados das querys
  status:
- stale: obsoleto.
- fetching: em carregamento.
- fresh: dados frescos.
- conseguir controlar os estados que os dados tem dentro da aplicação, essa é a ideia do react query.

## 2. Construinddo aplicação

**Sinalizando refetch dos dados**

- Utilizando o isFetching que vem no useQuery para mostrar um spinner

**Configurando Axios**

- Instalando e configurando axios
- Trocando fetch para axios

**Criando hook de listagem**

- criando hook de listagem, que busca os users com o useQuery, e retornamos ele como useUsers.
- Separando o hook useUsers para melhor entendimento e passando tipagem.

**Lógica de paginação**

- Criação da logica de paginação no arquivo index do miraje.
- Logica para pegar os 10 primeiros usuarios vindo do miraje.

**Componente de paginação**

- Criação de logica de plaginação, previusPage, nextPage, generatePagesArray e mostrando as paginas.

**Trocando de página**

- Utilizando função onPageChange para troca de páginas e atualização do state de page.
- Alterando miraje js para retornar todos os usuários e usuários por pagina
- Passar informação na chave para que não caio no cache e busque os dados de acordo com a pa´gina passada.
- Caso clique para voltar em uma página que já esteve, reaproveita o cache e não faz novamente a requisição, muito massa x D

**Prefetch de dados**

- Utilizando o Prefetch pra deixar os dados do usuário armazenados em cach antes de realmente precisarmos quando o mouse for passado em cima, pra quando a pessoa acessar a tela, já estar disponivel.

**Utilizando mutations**

- Criar, alterar ou deletar coisas dentro da API com as mutations.
- Utilizando application: ActiveModelSerialize para permitir fazer cadastro de novos usuários.
- Criando createUser com useMutation para criação de novos dados.
- Invalidando páginas, resetar cache com o invalidateQueries

**SSR no react querys**

- A forma de utilizar o react query em server side rendering
- Passando initialData como options no useQuery.

# Autenticação e autorização

## 1. Configurando ambiente

**Estratégia de autenticação**

- NextAuth é ideal para ser utilizado com login social.
- Front end -> Sign in -> POST / sessions(email and password) -> backend -> JWT(json web token) -> Front end (Armazena token , localStorage, cookie, sessionStorage) -> GET/profile(Header: JWT)

**Configurando API REST Full**

- Copiando repositori ignite reactjs auth backend para utilizar como backend da aplicação, com tudo estatico.

## 2. Autenticação com JWT

**Contexto de autenticação**

- Criação de contexto de autenticação para disponibilizar para todas as páginas.
- Contexto de Autenticação disponibilizando:
- email, senha, e se está logado ou não

**Configurando cliente do axios**

- Instalação de axios e configuração para requisição no backend de autenticação.
- Utilizando JWT e verificando retorno no site `https://jwt.io/`
- Configurando `signIn()` do `AuthContext` para envio de email e senha na rota de `/session`

**Salvando dados do usuário**

- Salvando dados do usuário dentro do contexto de auth.
- Redirecionando o usuário após o login para página de dashboard.

**Salvando tokens nos cookies**

- Instalando `nookies` para salvar cookies do `token` a `refreshtoken`
- obs: o `nookies` é ideal para aplicações nextjs.
- Utilizando o `setCookie`, pode receber até 4 parametros, `contexto do cookie`, `cookie name`, `cookie value`, e `opções` como tempo de expirar e rota que pode ter acesso.

**Recuperando estado da autenticação**

- Após o usuário fazer o login estaremos sempre indo buscar com o token armazenado no cookie, as informações do mesmo na rota `/me`.

**Realizando refresh do token**

- Toda vez que o token está expirado, iremos gerar um novo token na chamada Backend
- Utilizando o `interceptors` do axios, para intercepar a `request` or `response` e executar um código antes ou depois! (LEGAL xD)
- Com o `interceptors` ìremos pausar as requisições que estão em andamento e que estão ainda virão, para primeiro pegar o token e atualizar, após isso, voltar com as requisições. (Fila de requisições).

**Fila de requisições no Axios**

- Criando fila de requisição, e executandoas somente após o refresh do token. (Hard)

**Realizando logout automático**

- Criado função para deslogar o usuário de modo a destruir os cookies de token e refresh token e redirecionar para login.
- Qualquer tipo de problema com o refresh token, é deslogado o usuário.
- Caso o interceptor não caia em nenhuma tratativa, deixar cair no proprio erro do axios para fazer a tratativa.

## 3. Autenticação com SSR

**Recuperando token no server-side**

**Validando visitante**

**Validanto autenticação (Server)**

**Redirecionamento pelo servidor**

## 4. Controle de permissões
