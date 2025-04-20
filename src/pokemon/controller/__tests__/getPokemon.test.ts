import { Request, Response } from "express";
import { fixturePokemons, mewtwo } from "../../fixtures.js";
import PokemonController from "../PokemonController.js";

describe("Given the getPokemon method from PokemonController class", () => {
  const res: Pick<Response, "status" | "json"> = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  };

  const pokemonController = new PokemonController(fixturePokemons);

  describe("When it receives a request with Pokémon Mewtwo", () => {
    const req: Pick<Request, "params"> = {
      params: { pokemonId: mewtwo.id },
    };

    test("Then it should call the received response's method status with 200", () => {
      const expectedStatus = 200;

      pokemonController.getPokemon(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(expectedStatus);
    });

    test("Then it should call the received response's method json with Mewtwo Pokémon", () => {
      const expectedPokemon = mewtwo;

      pokemonController.getPokemon(req as Request, res as Response);

      expect(res.json).toHaveBeenCalledWith(expectedPokemon);
    });
  });

  describe("When it receives a request with Pokémon Snorlax", () => {
    const req: Pick<Request, "params"> = {
      params: { pokemonId: "abc123" },
    };

    test("Then it should call the received response's method status with 404", () => {
      const expectedStatus = 404;

      pokemonController.getPokemon(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(expectedStatus);
    });

    test("Then it should call the received response's method json with 'Pokémon not found' error", () => {
      const expectedMessage = { error: "Pokémon not found" };

      pokemonController.getPokemon(req as Request, res as Response);

      expect(res.json).toHaveBeenCalledWith(expectedMessage);
    });
  });
});
