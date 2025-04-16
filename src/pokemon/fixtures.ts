import Pokemon from "./Pokemon.js";

export const negri = new Pokemon(
  "Negri",
  6,
  "https://images.squarespace-cdn.com/content/v1/671237937161265de716c036/359c414e-00b5-4916-9fe9-0cbde091fdfd/negri-gat-sabi.JPG",
);

export const pikachu = new Pokemon(
  "Pikachu",
  25,
  "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/025.png",
);

export const fixturePokemons = [negri, pikachu];
