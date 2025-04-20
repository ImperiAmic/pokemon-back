import { Request, Response } from "express";
import { fixturePokemons, mewtwo } from "../../fixtures.js";
import PokemonController from "../PokemonController.js";
import Pokemon from "../../Pokemon.js";

describe("Given the deletePokemon method from PokemonController class", () => {
  const res: Pick<Response, "status" | "json"> = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  };

  let copyOfFixturePokemons: Pokemon[];
  let pokemonController: PokemonController;

  beforeEach(() => {
    copyOfFixturePokemons = [...fixturePokemons];
    pokemonController = new PokemonController(copyOfFixturePokemons);

    jest.clearAllMocks();
  });

  describe("When it receives a request with Pokémon Mewtwo", () => {
    const req: Pick<Request, "params"> = {
      params: { pokemonId: mewtwo.id },
    };

    test("Then it should call the received response's method status with 200", () => {
      const expectedStatusCode = 200;

      pokemonController.deletePokemon(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should call the received response's method JSON with Pokémon Mewtwo", () => {
      const expectedPokemon = mewtwo;

      pokemonController.deletePokemon(req as Request, res as Response);

      expect(res.json).toHaveBeenCalledWith(
        expect.objectContaining({
          name: expectedPokemon.name,
          imageUrl: expectedPokemon.imageUrl,
          pokedexPosition: expectedPokemon.pokedexPosition,
          isCaptured: expectedPokemon.isCaptured,
          types: expectedPokemon.types,
          abilities: expectedPokemon.abilities,
        }),
      );
    });

    test("Then Pokémon Mewtwo should not be in Pokémon list", () => {
      const expectedDeletedPokemon = mewtwo;

      pokemonController.deletePokemon(req as Request, res as Response);

      expect(copyOfFixturePokemons).not.toContain(expectedDeletedPokemon);
    });
  });

  describe("When it receives a request with the Pokémon Snorlax, which is not in the Pokémon list", () => {
    const req: Pick<Request, "params"> = {
      params: { pokemonId: "abc123" },
    };

    test("Then it should call the received response's method status with 404", () => {
      const expectedStatusCode = 404;

      pokemonController.deletePokemon(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should call the received response's method json with 'Pokémon to delete has not been found' error message", () => {
      const expectedMessage = { error: "Pokémon to delete has not been found" };

      pokemonController.deletePokemon(req as Request, res as Response);

      expect(res.json).toHaveBeenCalledWith(expectedMessage);
    });
  });
});
