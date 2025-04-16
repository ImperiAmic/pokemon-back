import { Request, Response } from "express";
import { fixturePokemons, negri, pikachu } from "../../fixtures.js";
import PokemonController from "../PokemonController.js";

describe("Given the getPokemon method from PokemonController class", () => {
  describe("When it receives a request and a response", () => {
    const req = {} as Request;
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as Pick<Response, "status" | "json">;

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

    test("Then it should call the received response's method json with Negri and Pikachu pokémon", () => {
      const expectedMessage = { pokemons: [negri, pikachu] };

      pokemonController.getPokemons(req, res as Response);

      expect(res.json).toHaveBeenCalledWith(expectedMessage);
    });
  });
});
