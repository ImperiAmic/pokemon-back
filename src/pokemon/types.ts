export interface PokemonStructure {
  id: string;
  name: string;
  imageUrl: string;
  pokedexPosition: number;
  isCaptured: boolean;
  types: string[];
  abilities: string[];
}

export interface PokemonInfo {
  types: string[];
  abilities: string[];
}

export type PokemonFormData = Omit<PokemonStructure, "id" | "isCaptured">;
