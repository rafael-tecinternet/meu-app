# Conceitos gerais sobre React

rafce

## props

São parâmetros ou argumentos passados para os componentes do React, normalmente usados para injeção de dados dinâmicos. As props funcionam como um objeto e cada prop criada por você passa a ser uma propriedade deste objeto.
As props são criadas manualmente, embora também exista a prop 'children' que permite ler o canteúdo entre as tags de abertura/ fechamento de um componente.
Props + propriedades do objetos.

## React Hooks

Hooks (ou "ganchos") são funções (iniciadas com "use") que permite gerenciar estados e outras funcionalidades do ciclo de vida de um componente.
React possui diversos tios de hooks, mas os principais são os de gerenciamentos de estados (useState) e o de gerenciamento de efeitos colaterais (useEffect).

### useState

Função que retorna uma variável com o valor de estado (state) e uma função que permite atualizar o valor desta variável. Podemos ter vários useState em nossos componentes para gerenciar estados e dados diferentes.

## Trabalhando com rotas no React para o carregamento de componentes a partir de links

### Instalação da biblioteca react-router-dom (versão 5)

npm install react-router-dom@5

# Criando um projeto React usando a ferramenta vite

npm create vite@latest
