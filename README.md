# 🎬 Mini Series Finder

Aplicação web desenvolvida em React + TypeScript para busca e consulta de informações sobre séries utilizando a [TVMaze API](https://www.tvmaze.com/api).

O projeto foi desenvolvido com o objetivo de praticar e consolidar conceitos fundamentais do React, como `useState`, `useEffect`, props, rotas, consumo de APIs, `fetch`, `async/await` e tratamento de estados de carregamento e erro.

## 🚀 Funcionalidades

- 🔎 Busca de séries por nome
- 🎬 Exibição dos resultados em cards
- ⭐ Exibição da avaliação das séries
- 📄 Página de detalhes da série
- 🎭 Exibição de gêneros e sinopse
- 🖼️ Exibição da imagem da série
- ↩️ Navegação entre páginas
- ❌ Página 404 para rotas inexistentes
- ⏳ Indicador de carregamento durante as requisições
- ⚠️ Tratamento de erros da API

## 🛠️ Tecnologias

- React
- TypeScript
- React Router DOM
- CSS Modules
- React Icons
- Vite
- TVMaze API

## 📚 Conceitos praticados

- `useState`
- `useEffect`
- Props
- Componentização
- React Router
- `Link`
- `useParams`
- `useNavigate`
- `Outlet`
- `fetch`
- Promises
- `async/await`
- `try/catch/finally`
- Consumo de APIs
- Tipagem de dados externos com TypeScript
- Renderização de listas com `.map()`
- Tratamento de valores `null`
- Estados de loading e error

## 🔌 API

Os dados das séries são obtidos através da [TVMaze API](https://www.tvmaze.com/api).

### Busca de séries

```text
https://api.tvmaze.com/search/shows?q={nome}
```

### Detalhes de uma série

```text
https://api.tvmaze.com/shows/{id}
```

## 📂 Estrutura do projeto

```text
src/
├── components/
│   ├── Footer/
│   ├── Header/
│   ├── SearchBar/
│   ├── SeriesCard/
│   ├── SeriesList/
│   └── Spinner/
│
├── pages/
│   ├── HomePage/
│   ├── Details/
│   ├── NotFound/
│   └── PageDefault/
│
├── services/
│   ├── searchSeries.ts
│   └── getSeriesDetails.ts
│
├── types/
│   ├── serieType.ts
│   ├── SearchResultType.ts
│   └── DetailsSerieType.ts
│
├── routes.tsx
└── main.tsx
```

## 🧭 Rotas

| Rota | Página |
|---|---|
| `/` | Página inicial e busca de séries |
| `/shows/:id` | Detalhes da série |
| `*` | Página não encontrada |

## ⚙️ Como executar o projeto

Clone o repositório:

```bash
git clone https://github.com/ricardohcoco/mini-series-finder
```

Entre na pasta do projeto:

```bash
cd mini-series-finder
```

Instale as dependências:

```bash
npm install
```

Execute o projeto:

```bash
npm run dev
```

A aplicação estará disponível na URL informada pelo Vite no terminal.

## 🎯 Objetivo do projeto

O Mini Series Finder foi desenvolvido como um projeto de estudo para reforçar os fundamentos de desenvolvimento Front-End com React e TypeScript.

A proposta foi manter a aplicação simples e objetiva, permitindo praticar o fluxo completo de uma aplicação que consome uma API:

**Usuário → Busca → React → Fetch/Async Await → TVMaze API → Estado → Lista de resultados → Detalhes da série**

## 👨‍💻 Autor

**Ricardo Coco**