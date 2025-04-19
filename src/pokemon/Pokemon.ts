import { v4 as uuidv4 } from "uuid";
import { PokemonStructure, PokemonInfo } from "./types.js";

class Pokemon implements PokemonStructure {
  public id: string;
  public isCaptured: boolean;
  public types: string[];
  public abilities: string[];

  constructor(
    public name: string,
    public pokedexPosition: number,
    public imageUrl: string,
    info: PokemonInfo,
  ) {
    this.id = uuidv4();
    this.isCaptured = false;
    this.types = info.types;
    this.abilities = info.abilities;
  }
}

export default Pokemon;
