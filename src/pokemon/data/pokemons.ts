import Pokemon from "../Pokemon.js";

const gengar = new Pokemon(
  "Gengar",
  94,
  "https://i.ibb.co/1YxX0HPy/gengar.webp",
);

const gyarados = new Pokemon(
  "Gyarados",
  130,
  "https://i.ibb.co/bgy1K3rg/gyarados.webp",
);

const meowth = new Pokemon(
  "Meowth",
  52,
  "https://i.ibb.co/5WB0PVLZ/meowth.webp",
);

const mew = new Pokemon("Mew", 151, "https://i.ibb.co/h1tHpTMj/mew.webp");

const raichu = new Pokemon(
  "Raichu",
  26,
  "https://i.ibb.co/wZX9RV6x/raichu.webp",
);

const zapdos = new Pokemon(
  "Zapdos",
  145,
  "https://i.ibb.co/h1hCzdDQ/zapdos.webp",
);

export const pokemons = [gengar, gyarados, meowth, mew, raichu, zapdos];
