import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../axiosBaseQuery.ts";
import {
  PokemonApiRequestParams,
  PokemonApiResponse,
} from "../DTO/pokemon.DTO.ts"; // Import the base query

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: axiosBaseQuery({ baseUrl: "" }),
  endpoints: (builder) => ({
    getPokemonList: builder.query<PokemonApiResponse, PokemonApiRequestParams>({
      query: (params) => ({ url: "pokemon/", params }),
    }),
    getPokemonById: builder.query<any, string | number>({
      query: (id) => ({ url: `pokemon/${id}/` }),
    }),
  }),
});

export const { useGetPokemonListQuery, useGetPokemonByIdQuery } = pokemonApi;
