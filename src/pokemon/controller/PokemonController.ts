import { Request, Response } from "express";
import PokemonStructure from "../types.js";
import PokemonControllerStructure from "./types.js";

class PokemonController implements PokemonControllerStructure {
  constructor(private pokemons: PokemonStructure[]) {}

  getPokemons = (_req: Request, res: Response): void => {
    res.status(200).json({ pokemons: this.pokemons });
  };
}

export default PokemonController;
