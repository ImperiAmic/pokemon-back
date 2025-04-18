import Pokemon from "./Pokemon.js";

export const mewtwo = new Pokemon(
  "Mewtwo",
  150,
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/150.svg",
);

export const pikachu = new Pokemon(
  "Pikachu",
  25,
  "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/025.png",
);

export const fixturePokemons = [mewtwo, pikachu];
