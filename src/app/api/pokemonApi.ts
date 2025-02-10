import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from './axiosBaseQuery'; // Import the base query

export const pokemonApi = createApi({
    reducerPath: 'pokemonApi',
    baseQuery: axiosBaseQuery({ baseUrl: '' }),
    endpoints: (builder) => ({
        getPokemonList: builder.query<{ results: { name: string; url: string }[] }, void>({
            query: () => ({ url: 'pokemon/' }),
        }),
        getPokemonById: builder.query<any, string | number>({
            query: (id) => ({ url: `pokemon/${id}/` }),
        }),
    }),
});

export const { useGetPokemonListQuery, useGetPokemonByIdQuery } = pokemonApi;
