import { Request, Response } from "express";
import { fixturePokemons, mewtwo, pikachu } from "../../fixtures.js";
import PokemonController from "../PokemonController.js";

describe("Given the getPokemon method from PokemonController class", () => {
  describe("When it receives a request and a response", () => {
    const req = {} as Request;
    const res: Pick<Response, "status" | "json"> = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    let pokemonController: PokemonController;

    beforeEach(() => {
      pokemonController = new PokemonController(fixturePokemons);

      jest.clearAllMocks();
    });

    test("Then it should call the received response's method status with 200", () => {
      const expectedStatus = 200;

      pokemonController.getPokemons(req, res as Response);

      expect(res.status).toHaveBeenCalledWith(expectedStatus);
    });

    test("Then it should call the received response's method json with Mewtwo and Pikachu pokémon", () => {
      const expectedMessage = { pokemons: [mewtwo, pikachu] };

      pokemonController.getPokemons(req, res as Response);

      expect(res.json).toHaveBeenCalledWith(expectedMessage);
    });
  });
});
