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

export interface PokemonByIdApiRequest {
  id: string;
}

interface PokemonType {
  type: {
    name: string;
  };
}

export interface PokemonByIdApiResponse {
  name: string;
  weight: number;
  height: number;
  sprites: {
    front_default: string;
  };
  types: PokemonType[];
}
