import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../axiosBaseQuery.ts";
import {
  PokemonApiRequestParams,
  PokemonApiResponse,
  PokemonByIdApiRequest,
  PokemonByIdApiResponse,
} from "../DTO/pokemon.DTO.ts"; // Import the base query

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: axiosBaseQuery({ baseUrl: "" }),
  endpoints: (builder) => ({
    getPokemonList: builder.query<PokemonApiResponse, PokemonApiRequestParams>({
      query: (params) => ({ url: "pokemon/", params }),
    }),
    getPokemonById: builder.query<
      PokemonByIdApiResponse,
      PokemonByIdApiRequest
    >({
      query: ({ id }) => ({ url: `pokemon/${id}/` }),
    }),
  }),
});

export const { useGetPokemonListQuery, useGetPokemonByIdQuery } = pokemonApi;
