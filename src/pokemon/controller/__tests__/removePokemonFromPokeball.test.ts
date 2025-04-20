import { Request, Response } from "express";
import { fixturePokemons, mewtwo } from "../../fixtures.js";
import PokemonController from "../PokemonController.js";

describe("Given the removePokemonFromPokeball method from PokemonController class", () => {
  const res: Pick<Response, "status" | "json"> = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  };

  let pokemonController: PokemonController;

  beforeEach(() => {
    pokemonController = new PokemonController(fixturePokemons);

    jest.clearAllMocks();
  });

  describe("When it receives a request with Pokémon Mewtwo", () => {
    const req: Pick<Request, "params"> = {
      params: { pokemonId: mewtwo.id },
    };

    test("Then it should call the received response's method status with 409 and 'Pokémon already outside Pokéball' error", () => {
      const expectedStatus = 409;
      const expectedMessage = { error: "Pokémon already outside Pokéball" };

      pokemonController.removePokemonFromPokeball(
        req as Request,
        res as Response,
      );

      expect(res.status).toHaveBeenCalledWith(expectedStatus);
      expect(res.json).toHaveBeenCalledWith(expectedMessage);
    });

    test("Then it should call the received response's method json with Mewtwo Pokémon", () => {
      const expectedPokemon = mewtwo;
      mewtwo.isCaptured = true;

      pokemonController.removePokemonFromPokeball(
        req as Request,
        res as Response,
      );

      expect(res.json).toHaveBeenCalledWith(expectedPokemon);
    });
  });

  describe("When it receives a request with Pokémon Snorlax", () => {
    const req: Pick<Request, "params"> = {
      params: { pokemonId: "abc123" },
    };

    test("Then it should call the received response's method status with 404", () => {
      const expectedStatus = 404;

      pokemonController.removePokemonFromPokeball(
        req as Request,
        res as Response,
      );

      expect(res.status).toHaveBeenCalledWith(expectedStatus);
    });

    test("Then it should call the received response's method json with 'Pokémon not found' error", () => {
      const expectedMessage = { error: "Pokémon not found" };

      pokemonController.removePokemonFromPokeball(
        req as Request,
        res as Response,
      );

      expect(res.json).toHaveBeenCalledWith(expectedMessage);
    });
  });
});
