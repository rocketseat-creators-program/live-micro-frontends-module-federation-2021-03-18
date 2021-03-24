<img src="https://storage.googleapis.com/golden-wind/experts-club/capa-github.svg" />

## Criando Micro-Front-Ends com Webpack5 Module Federation

Nesta aula, criaremos vamos utilizar o plugin module federation do webpack
para criar nosso primeiro Micro-Front-Ends, O Module federeation é responsavel por criar essa integração de mutiplos builds separados
com ele voce vai poder criar seus MFE compartilhando codigo (componentes, logica, serices, etc..) em run time 🤯, e ao mesmo tempo manter
seu processo de build deployment e desenvolvimento idenpendentes.

com esse exemplo vamos criar 3 micro-front-ends compartilhando codigo de forma bidirecional,
a ideia e ao final da aula ter um modelo bem simples de e-commerce onde vamos ter
com a mesma experiencia sendo criada em todos os nossos MFE, sem perca de performance, compartilhando codigo e atualizando em runtime.

## Aplicação Final

<img src="./misc/Application.gif" />

Note aqui que estamos navegando por servers diferentes mas a experiencia final
é a mesma não importa em qual MFE você esteja. ta curioso como vamos fazer isso ?
então vamos la !!!.

## Primeiros passos 🏁

Clone o repositório.

```sh
git clone git@github.com:rocketseat-experts-club/live-micro-frontends-module-federation-2021-03-18.git
```

`cd` no diretório.

```sh
cd  [TODO]
```

Instale as dependências diretorio principal do projeto:

**OBS aqui vamos utilizar o yarn para gerenciar nossos pacotes**

```sh
yarn install
```

depois entre no diretorio dos MFE

```sh
cd  shared-routing
```

Instale as dependencias dos MFE

```sh
yarn install
```

Inicie o servidor de desenvolvimento:

```sh
yarn  start
```

Com isso você vai ter as aplicaçõe rodando em :

- [localhost:3000](http://localhost:3000/) (Aplicação host) - `shell`
- [localhost:3001](http://localhost:3001/) (Aplicação standalone remota) - `ProductList`
- [localhost:3002](http://localhost:3002/) (Aplicação standalone remota) - `ProductDetails`

Abra uma dessas portas no navegador de sua escolha e você está pronto para integagir com a aplicação inicial 🚀.

💡 **Dica profissional** use o `shared-routing` como guia de referência final, este arquivo contém o projeto final para que você possa acompanhar.

## Estrutura do Projeto 🏗

Como descrito vamos criar uma estrutura de MFE com hosts host bidirecionais
podemos ver aqui o grafico de como os nossos MFE vão ser divididos

<img src="./misc/mfe.png" />

Na pasta `Container/shared-routing`, temos os nossos MFE's:

- `Shell`: **MFE** Onde vamos criar o nosso application shell
- `ProductList /`: **MFE** responsavel pela listagem de produtos
- `ProductDetails /`: **MFE** responsavel pelo detalhamento de produtos

```md
├── ProductDetails
│   ├── package.json
│   ├── public
│   ├── src
│   └── webpack.config.js
├── ProductList
│   ├── package.json
│   ├── public
│   ├── src
│   └── webpack.config.js
├── Shell
│   ├── package.json
│   ├── public
│   ├── src
│   └── webpack.config.js
├── package.json
└── yarn.lock
```

## Ferramentas Utilizadas 🧰

- [x] React como uma linguagem de IU
- [x] Webpack5 como module bundler
- [x] Prettier como formatador de código
- [x] Lerna para gerenciar o monorepo
- [x] TailwindCss UI como nosso kit de ferramentas de design

## Expert

| [<img src="https://avatars.githubusercontent.com/u/7741167?s=460&u=41e738d1178fcf31656665fe34c1c490d9c271cb&v=4" width="75px;"/>](https://github.com/vitormalencar) |
| :-----------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|                                                          [Vitor Alencar](https://github.com/vitormalencar)                                                          |

## Licença

Projetado com ♥ por [vitormalencar](https://vitormalencar.com). Licenciado sob a [Licença MIT](licença).
