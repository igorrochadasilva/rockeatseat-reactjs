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
