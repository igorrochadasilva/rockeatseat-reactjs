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