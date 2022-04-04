## React Chapter 1 

# 1. Configurando Ambiente

1. Introdução do modulo

2. Criando estrutura do projeto
- Instalação de react utilizando yarn.
- Instalação de react-dom, arvore de elementos da aplicação, html convertido em uma sintaxe de objeto js

3. Configurando Babel
- Instalação de babel e criação de pasta babel.config.js e cofigurando

4. Configurando Webpack.
- Instalação de webpack e configuração de entrada, saida, resolve e teste.

5. Estrutura do React
- Criando App, e utilizando index para renderizar na div de ID root.

6. Servidor HTML
- Utilizando o html-webpack-plugin para gerar um arquivo html.

7. Webpack Dev Server
- Utilizando o Dev Server pra atualizar o dom sempre que ocorrer alteração no arquivo

8. Utilizando Source Maps
- Visualizar o código original mesmo o código estando buildado, facilitando debuggar código

9. Ambiente dev e produção
- Utilizando cross env para criar variavel de ambiente e distinguir quando é desenvolvimento e produção na hora de rodar o webpack

10. Importando arquivos CSS
- utilizando os loader de style-loader e css-laoder no webpack

11. Utilizando Sass

# 2. Conceitos importantes

1. Primeiro componente React
- criação do primeiro componente e utilização de script no meio do elemento

2. Propriedades no React
- Passando props em componentes React pai pra filho.

3. Estado do componente
- Utilizando o useState para variaveis de estado.

4. A imutabilidade no React
- Entendesse por imutável, algo não esta sujeito a mudar/alterar. É esse conceito que levamos para o estado, pois não conseguimos alterar da maneira tradicional como era feito no javascript antigamente, apenas conseguimos alterar com o método setState.

5. Fast Refresh no Webpack
- Utilizando a ferramenta Fast Refresh para manter os estados do componente quando ocorrer alguma alteração no código. "Muito bacana por sinal!"


# 3. Chamadas HTTP

1. Estilização da listagem
- estilizando o repository list.

2. Usando o useEffect 
- utilizando o useEffect e buscando dados da API

3. Listando repositórios
- Utilizando o map para retornar cada repoasitorio da requisição e montar um elemento em da lista pra cada repositório.

# 4. Usando Typescript

1. Fundamentos do Typescript
- Explicando os fundamentos do typescript e sua importancia na tipagem de variaveis.

2. Typescript no ReactJS
- Instalando o typescript e criando arquivo tsconfig.json com yarn tsc --init

3. Componentes com Typescript
- Atualizando componentes para TSX e tipando recebidas por eles.

# 5. Finalizando aplicação

1. Utilizando React DevTols
- Utilizando o React Devtols para visualizar os componentes da aplicação pelo console e profile para lidar, observar e monitorar as renderizações dos componentes

2. Finalizando o Modulo


## DESAFIO 1
1. o set state pode ser usado de forma callback, o setState é assincrona, logo seria bacana usar o callback