import { Request, Response } from "express";
import PokemonController from "../PokemonController.js";
import { fixturePokemons } from "../../fixtures.js";
import Pokemon from "../../Pokemon.js";

describe("Given the addPokemon method from PokemonController class", () => {
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

  describe("When it receives a request with Pokémon Snorlax", () => {
    const req: Pick<Request, "body"> = {
      body: {
        name: "Snorlax",
        pokedexPosition: 143,
        imageUrl:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/143.svg",
        types: ["lazy"],
        abilities: ["sleep in the middle of the fucking path"],
      },
    };

    test("Then it should call the received response's method with 201", () => {
      const expectedStatusCode = 201;

      pokemonController.addPokemon(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should call the received response's method json with Pokémon Snorlax", () => {
      const expectedPokemon = {
        name: "Snorlax",
        pokedexPosition: 143,
        imageUrl:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/143.svg",
        types: ["lazy"],
        abilities: ["sleep in the middle of the fucking path"],
      };

      pokemonController.addPokemon(req as Request, res as Response);

      expect(res.json).toHaveBeenCalledWith(
        expect.objectContaining({
          name: expectedPokemon.name,
          pokedexPosition: expectedPokemon.pokedexPosition,
          imageUrl: expectedPokemon.imageUrl,
          types: expectedPokemon.types,
          abilities: expectedPokemon.abilities,
        }),
      );
    });
  });

  describe("When it receives a request with Pokémon Pikachu", () => {
    const req: Pick<Request, "body"> = {
      body: {
        name: "Pikachu",
        pokedexPosition: 25,
        imageUrl:
          "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/025.png",
      },
    };

    test("Then it should call the received response's method status with 409", () => {
      const expectedStatusCode = 409;

      pokemonController.addPokemon(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should call the received response's method json with 'A Pókemon with same name is already added' message error", () => {
      const expectedMessage = {
        error: "A Pókemon with same name is already added",
      };

      pokemonController.addPokemon(req as Request, res as Response);

      expect(res.json).toHaveBeenCalledWith(expectedMessage);
    });
  });
});
