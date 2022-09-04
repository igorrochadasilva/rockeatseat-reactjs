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
