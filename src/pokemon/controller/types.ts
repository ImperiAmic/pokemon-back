import { Request, Response } from "express";

interface PokemonControllerStructure {
  getPokemons: (req: Request, res: Response) => void;
  addPokemon: (req: Request, res: Response) => void;
  deletePokemon: (req: Request, res: Response) => void;
  addPokemonToPokeball: (req: Request, res: Response) => void;
  removePokemonFromPokeball: (req: Request, res: Response) => void;
}

export default PokemonControllerStructure;
