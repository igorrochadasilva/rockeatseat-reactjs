## React Chapter 2

# 1. Estrutura da aplicação

1. Introdução do modulo

2. Estrutura com create-react-app
- iniciando com template create-react-app [name] --template typescript
- Limpeza de arquivos, remoção de todos os arquivos do public, de css e testes
- script eject serve para fazer mudança no webpack ou babel, mas ele não tem mais volta se for rodado.
- a cofiguração do template react satisfaz 99% dos casos
- movendo algumas dependencias para devDependences

3. Exportando assets do Figma
- Baixando icones svg do figma

4. Instalando styled component
- Criação de componentes pré estilizados
- Vantagem do StyledComponent: de suportar encadeamento de estilos igual o sass
- Fica apenas dentro do escopo daquele componente

5. Criando estilos globais
- Utilizando porcentagem na font size para uma melhor responsividade 

6. Fontes do Google Fonts
- Baixando e utilizando fontes do google.


# 2. Componentização

1. Componente: Header
- criação de componente Header, Container e content, utilizando styled component, e alguns macetes de css.

2. Componente: Summary
- Criação de componente Summary, container, dashboard, e style.

3. Componente: TransactionsTable
- Criação de componente de tabela de transações e estilização.

# 3. Consumindo API

1. Criando front-end sem back-end
- json-server permiti criar rotas atraves de arquivos json
- Mirage JS, construir API fake dentro do front end, contem bancos de dados integrados, relacionamento. (VAMOS USAR ESSE)
- MSW serve para adicionar funcionamento fictio para camada de network da aplicação.

2. Configurando MirageJs
- configuração de rota de mirage e retorno de rota

3. Configurando cliente do axios
- configuração de axios para requisição de api.


# 4. Modal & Forms

1. Configurando modal de criação.
- biblioteca react-modal para criação de modails, ela é bem leve : ) .
- Repasse de propriedades para componentes, no caso, função de abrir modal

2. Componente: NewTransactionModal
- Criar componente modal separadamente, para deixar componentizado cada elemento.

3. Estrutura do formulário
- criando html e estilizando com styled componente modal e overlay

4. Estilizando modal
- Estilizando modal, inputs e textos com styled component.

5. Criando botões de Tipo
- criação de componente transictionTypeContainer e botões dentro dele de Entrada e Saida.
- Utilizando polished para utilizar função dark dentro do componente no styled component.

6. Funcionamento dos botões
- Passar propriedades pra um elemento e estiliza de acordo com a propriedade recebida no styled component.

7. Cores dos botões
- Passando cores de fundo como prop e utilizando transparentize do polished.

8. Salvando dados do form
- Salvando todos os dados de cada input dentro de estados.

9. Inserindo transação na API
- criando banco de dados interno utilizando models do mirage.js
- criando rota de envio de transações. 
- listando todas as transações criadas.

10. Listando Transações e seeds
- Listando transações no tab atráves do state que transactions e map retornando cada valor na tabela

11. Formatando Valores
- Utilizando api Intl, para formatar data e valores.

# 5. Contextos e hooks

1. Introdução Context
- Compartilhamento de estados entre varios componentes da aplicação

2. A context Api do React
- Utilizando o useContext para acessar o contexto e seus valores de estado

3. Carregando transações
- Criando Transaction Provider function.
- Passado array de transações como valor no Transaction provider.
- Passado interface passando children do tipo React Node que será recebido na função.
- Utilizando Contexto nos componentes

4. Movendo criação para o context.
- Passagem de metodo de criar transação no context api para utilizar dentro dos componentes.

5. Finalizando inserção
- Deixando a função create transaction como async, para utilizar o await e esperar ser enviado o dado
- Fechar modal após envio de dados.
- Rezetar campos de input

6. Calculo resumo
- Utilizando o reduce para calcular total, entradas e saidas. legal : ) 
- Formatando valores

7. Criando Hook
- Criando hook useTransaction para acessar context de transactions