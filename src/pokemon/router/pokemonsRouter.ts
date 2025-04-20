import { Router } from "express";
import PokemonController from "../controller/PokemonController.js";
import { pokemons } from "../data/pokemons.js";

const pokemonsRouter = Router();

const pokemonController = new PokemonController(pokemons);

pokemonsRouter.get("/", pokemonController.getPokemons);

pokemonsRouter.post("/", pokemonController.addPokemon);

pokemonsRouter.delete("/:pokemonId", pokemonController.deletePokemon);

pokemonsRouter.patch(
  "/add-to-pokeball/:pokemonId",
  pokemonController.getPokemon,
);

export default pokemonsRouter;
