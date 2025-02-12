# Pokémon App

A modern React application built with TypeScript and Redux Toolkit to fetch and display a list of Pokémon from the PokeAPI. The app allows users to click on a Pokémon to view detailed information, with persistent state management.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Building for Production](#building-for-production)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)

## Features

- Fetches and displays a list of Pokémon from the [PokeAPI](https://pokeapi.co/).
- Allows users to view detailed information about each Pokémon.
- Utilizes Redux Toolkit and RTK Query for state management and data fetching.
- Written in TypeScript for type safety.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 14 or later)
- **Yarn** (version 1.22 or later)

## Installation

### Clone the Repository

```sh
git clone https://github.com/Y0o0Y1/pokemon-app.git
cd pokemon-app
```
### Install Dependencies

```sh
yarn install
```
### Running the Application

To start the development server:
```sh
yarn start
```
The application will be available at:
    Local: http://localhost:3000
    On Your Network: Check your network IP when running the app.
    
### Project Structure

The project's structure is as follows:
```sh

pokemon-app/
├── public/                 # Public assets
├── src/
│   ├── app/                # Application-wide logic
│   │   ├── api/            # API services
│   │   │   ├── DTO/        # Data Transfer Objects
│   │   │   ├── axiosBaseQuery.ts
│   │   │   ├── services/   # Service definitions
│   │   │   └── pokemonApi.ts
│   │   ├── slices/         # Redux slices
│   │   └── store.ts        # Redux store configuration
│   ├── components/         # UI components
│   │   ├── LoadingOverlay.tsx
│   │   ├── PokemonDetails.tsx
│   │   ├── PokemonList.tsx
│   ├── router/             # Routing configuration
│   │   ├── index.ts
│   │   ├── routes.tsx
│   ├── index.tsx           # Application entry point
│   ├── App.tsx             # Main application component
│   ├── App.css             # Global styles
├── .gitignore
├── package.json
├── tsconfig.json
├── yarn.lock
└── README.md
```
### Technologies Used

    React: A JavaScript library for building user interfaces.
    TypeScript: A superset of JavaScript that adds static typing.
    Redux Toolkit: Simplifies state management in Redux.
    RTK Query: A powerful data fetching and caching tool.
    React Router: Handles navigation within the app.
    Axios: Used for API requests.


