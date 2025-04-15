import { v4 as uuidv4 } from "uuid";
import PokemonStructure from "./types.js";

class Pokemon implements PokemonStructure {
  public id: string;
  public isCaptured: boolean;

  constructor(
    public name: string,
    public pokedexPosition: number,
    public imageUrl: string,
  ) {
    this.id = uuidv4();
    this.isCaptured = false;
  }
}

export default Pokemon;
