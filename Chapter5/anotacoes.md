# React Chapter 5

## Performando apps com ReactJS

### Fundamentos

**Renderizações no React**

# Pai para filho

```tsx
<Pai>
  <Filho />
</Pai>
```

# Propriedade

```tsx
<Pai>
  <Filho title="" />
</Pai>
```

# Hooks (useState, useContext, useReducer)

```tsx
function Component() {
  const [estado, setEstado] = useState();
}
```

# Fluxo de renderização

1. Gerar uma nova versão do componente que precisa ser renderizado;
2. Comparar essa nova versão com a versão anterior já salva na página;
3. Se houverem alterações, o React "renderiza" essa nova vesão em tela;

**Exemplo de aplicação**

- Criando aplicação de listagem de produtos atraves de um search.
- Utilizando o json-server para criar um servidor fake

**React DevTools**

- Vendo a ferramenta React DevTools.
- Ativar "Highlight updates when components render." para mostrar linhas nos componentes que foram renderizados de acordo com uma ação.
- Ativar "Record why each component rendered while profiling." para ver o motivo do componente ter sido renderizado.

# Otimização

**Memo**

- o memo vai conseguir evitar de criar uma nova versão do componente caso nenhuma propriedade do componente tenha sido alterada
- o memo faz um shallow compare -> comparação rasa

**useMemo**

- Utilizand o useMemo para memorizar um valor.

**useCallback**

- Utilizand o useCallback para memorizar uma função.
- Apenas serve para a função de igualdade referencial, dentro do fluxo de referenciação dos componentes

- **Formatação de dados**
- Sempre que for formatar os dados, é o ideal fazer assim que traz os dados, e não na hora que irá exibir os dados.

  **Dynamic import (Code splitting)**

  - Utilizando o dynamic para carregar componentes somente quando acontecer o evento que irá renderizalos, de forma a utilizar lazy loading.

  **Virtualização**

  - Utilizando a virtualização para mostrar somente os itens que estão na tela do usuário, e mostrar os outros somente quando scrola

  **Bundle Analyzer**

  - Utilizando o bundle analyzer para verifica o tamanho dos arquivos bundle após o build.

  ## Testes unitários no React

  ### Introdução

**Testes no front-end**

- Teste unitário garante que um componente,unidade, funcionalidade especifica da aplicação esteja funcionando desconectada de todo o restante da aplicação

- Teste de integração testa duas ou mais funcionalidades funcionando juntas. Quando é pego 2 ou mais unidades e testa juntas.

- Teste E2E(ponta a ponta), testa a aplicação da forma que o usuário utilizaria ela.

**Configurando Testing Library**

- Configurando o ambiente para testes com Testing Library e jest

### Testando componentes

**Testando primeiro componente**

- Criando um mock de imitação do useRouter do next para utilizar no test do componente ActiveLink.
- Criando testes validando a renderização e a classe `active` do componente

**Testando Header**

- Instalando biblioteca identity-obj-proxy para entender arquivos css module dentro do JS
- Criando mock de useSession, verificando o tipo do valor para ser passado como retorno um valor fictício no mock

**Testando SignInButton**

- Instalando o `ts-jest` que trás uma serie de funcionalidades,e uma delas para criar um mock que receba parâmetros diferentes de acordo com o test.
- Utilizando o `mockReturnValueOnce` para trazer um valor diferente para o mock apenas para aquele teste.

**Testando SubscribeButton**

- Utilizando o `fireEvent` para simular um evento de click no botão `subscribe now`
- Mokando funcionamento externo e testando a parte visual do subscribe.
- Passando valores de usuário já escrito para testar subscription e seu redirect.

### Testando Paginas

**Testando página Home**

- Testando a pagina home e verificando se foi renderizada.

**Testando getStaticProps**

- Testando os dados que são retornados do getStaticProps na pagina Home

**Testando Página de Posts**

- Testando os dados que são retornados pelo getStaticPros.
- Utilizando o `jest.mocked` para o `getPrismicClient`
- Verificando se o retorno dos dados é igual ao esperado usando `toEquals` e `objectContaining`

**Testando Página de Post**

- Testando renderização da página
- Testando redirect se usuário não é inscrito, mocando `getSession` e passando valor nulo para teste de não cadastrado.
- Testando carregamento de dados, mocando `getSession` e `getPrismicClient` para retornar dados para o teste

**Testando Página de Preview**

- Testando renderização da página
- Testando redirect quando usuário esta inscrito, mocando `getSession` e `useRouter` para retornar os dados no cenário de teste.
- Testando carregamento de dados, mocando `getPrismicClient` para retornar dados para o teste

### Dicas em testes unitários

**Dicas de testes assíncronos**

- Utilizando o `findByText` par testar texto assíncrono
- Utilizando o `waitFor` aguardando o item assíncrono
- Utilizando o `waitForElementToBeRemoved` para checar se o elemento saiu da tela.

**Testing playground**

- Utilizando o `screen.logTestingPlaygroundURL()` para ver todo o HTML gerado pelo test, e utilizar test playground para encontrar o elemento em tela. Ótima ferramenta : )

**Coverage report**

- Configurando o Coverage no jest.config.js
- Utilizando o coverage para gerar um arquivo de report. Muito Massa : )
