import { Request, Response } from "express";

interface PokemonControllerStructure {
  getPokemons: (req: Request, res: Response) => void;
}

export default PokemonControllerStructure;
