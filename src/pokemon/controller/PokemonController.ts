import { Request, Response } from "express";
import { PokemonFormData, PokemonStructure } from "../types.js";
import PokemonControllerStructure from "./types.js";
import Pokemon from "../Pokemon.js";

class PokemonController implements PokemonControllerStructure {
  constructor(private pokemons: PokemonStructure[]) {}

  getPokemons = (_req: Request, res: Response): void => {
    res.status(200).json({ pokemons: this.pokemons });
  };

  addPokemon = (req: Request, res: Response): void => {
    const pokemon = req.body as PokemonFormData;

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

  deletePokemon = (req: Request, res: Response): void => {
    const pokemonId = req.params.pokemonId;

    const isPokemonFound = this.pokemons.find(
      (pokemon) => pokemon.id === pokemonId,
    );

    if (!isPokemonFound) {
      res.status(404).json({ error: "Pokémon to delete has not been found" });
      return;
    }

    const pokemonPosition = this.pokemons.findIndex(
      (pokemon) => pokemon.id === pokemonId,
    );

    const pokemonToDelete = this.pokemons[pokemonPosition];

    this.pokemons.splice(pokemonPosition, 1);

    res.status(200).json(pokemonToDelete);
  };

  getPokemon = (req: Request, res: Response): void => {
    const pokemonId = req.params.pokemonId;

    const pokemonToSave = this.pokemons.find(
      (pokemon) => pokemon.id === pokemonId,
    );

    if (!pokemonToSave) {
      res.status(404).json({ error: "Pokémon not found" });
      return;
    }

    if (pokemonToSave.isCaptured) {
      res.status(409).json({ error: "Pokémon already in Pokéball" });
      return;
    }

    pokemonToSave.isCaptured = true;

    res.status(200).json(pokemonToSave);
  };
}

export default PokemonController;
