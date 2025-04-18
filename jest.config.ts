import type { Config } from "jest";
import { createDefaultPreset } from "ts-jest";

const config: Config = {
  verbose: true,
  rootDir: "src",
  preset: "ts-jest",
  resolver: "ts-jest-resolver",
  collectCoverageFrom: [
    "**/*.ts",
    "!index.ts",
    "!pokemon/data/pokemons.ts",
    "!pokemon/router/pokemonsRouter.ts",
    "!server/app.ts",
    "!server/startServer.ts",
  ],
  coverageDirectory: "../coverage",
  ...createDefaultPreset(),
};

export default config;
