# Pokedex Project

|                                               Lista de Pokemons                                               |                                             Detalhes sobre o pokemon                                             |
| :-----------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------: |
| ![list](https://user-images.githubusercontent.com/2706523/222454539-972be18a-53f9-4306-b0e3-dda9ee13f803.png) | ![details](https://user-images.githubusercontent.com/2706523/222454630-f40adce7-8922-4041-aadd-d8f88d8cae75.png) |

### Caracteristicas

- Arquitetura MVVM, com conceitos de Clean Architeture para frontend
- Design System com Styled Component + Styled System
- Redux + Redux saga

> Este projeto tem como finalidade mostrar todos os pokemons em uma lista paginada e permitir a visualização dos detalhes do mesmo.

### Configurando ambiente

##### Primeira etapa

- [NodeJS guia de instalação](https://nodejs.org/en/download/package-manager/ 'Instalação')
- [Homebrew para mac](https://brew.sh/index_pt-br 'Instalação')
- [Chocolatey para Windows](https://chocolatey.org/ 'Instalação')
- [ReactJs ](https://reactjs.org/docs/add-react-to-a-new-app.html 'Instalação')
- [Yarn ](https://yarnpkg.com/lang/en/docs/install/#mac-stable 'Instalação') -[Expo](https://docs.expo.io/versions/latest/introduction/installation/)

##### Segunda etapa

Configurado o ambiente podemos seguir adiante.

> Baixando o projeto

```sh
$ git clone https://github.com/Defyland/pokedex.git
$ cd pokedex
```

##### Terceira etapa

> Instalando dependências do projeto e executando o projeto.

```sh
$ yarn install
$ yarn start - E escolher o device que gostaria de usar
$ ou yarn ios ou yarn android
```

ou

```sh
$ npm install
$ expo start
```

### Plugins

Lista dos principais plugins utilizadas no projeto.

- redux
- react-redux
- redux-saga
- testing-library
- styled-component
- styled-system
- expo

### Testes automatizados

Testes utilizados no desenvolvimento do projeto.

- Jest / Testing-library react native

### Generator utilizado

> Este gerador foi criado para facilitar o desenvolvimento e a estruturação de novos projetos, além da manutenção de projetos ja existentes.

#### The template was created so we can start the project faster. Unifying all the logic of the redux, in a single file like in duck pattern. We also have a template generator where we can create several components with only this command.

## Starting project with this template

You can starting a new project this way:

`expo init MyAppName --template react-native-template-vindicce-context`

#

  <p align="center" >
    <a href="">
      <img alt="react-native-gifted-chat" src="https://user-images.githubusercontent.com/22872282/77976697-0aea9380-72d4-11ea-96bb-2d4484a8c6a6.png" />
    </a>
  </p>

## Generator Options

run `yarn g` to see the options

- `Function View`: • View, to create Views(Container's), with redux.
- `Component`: • Components, for the creation of components.
- `Flow`: • Flow, to create a new application flow, already as a standard view, with redux.
- `Hooks`: To create a new hooks/context.

#### :exclamation: `The model will take care of creating and making all imports to leave what was created with global access.`

## import examples

All codes can be imported from the index.js of their respective folders.

```components

import React from 'react'
import { CustomButton, CustomBackground } from '../components'
...

```

## Links with libs

### Styled-components

https://styled-components.com

### Navigator

https://reacttraining.com/react-router/core/guides/quick-start

## You have a question?

Please send email for the allanflaviosilva@gmail.com | henriquebasshvf@gmail.com
