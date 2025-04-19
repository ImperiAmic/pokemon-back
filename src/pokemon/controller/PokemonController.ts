import { Request, Response } from "express";
import { PokemonStructure } from "../types.js";
import PokemonControllerStructure from "./types.js";
import Pokemon from "../Pokemon.js";

class PokemonController implements PokemonControllerStructure {
  constructor(private pokemons: PokemonStructure[]) {}

  getPokemons = (_req: Request, res: Response): void => {
    res.status(200).json({ pokemons: this.pokemons });
  };

  addPokemon = (req: Request, res: Response): void => {
    const pokemon: PokemonStructure = req.body;

    const newPokemon = new Pokemon(
      pokemon.name,
      pokemon.pokedexPosition,
      pokemon.imageUrl,
      {
        types: pokemon.types,
        abilities: pokemon.abilities,
      },
    );

    const isNewPokemonAdded = this.pokemons.some(
      (pokemon) => pokemon.name === newPokemon.name,
    );

    if (isNewPokemonAdded) {
      res
        .status(409)
        .json({ error: "A Pókemon with same name is already added" });
      return;
    }

    this.pokemons.push(newPokemon);

    res.status(201).json(newPokemon);
  };
}

export default PokemonController;
