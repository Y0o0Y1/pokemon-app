export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonApiResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Pokemon[];
}
export interface PokemonApiRequestParams {
  limit?: number;
  offset?: number;
}
