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
    "!monument/data/monuments.ts",
    "!monument/router/monumentsRouter.ts",
    "!server/app.ts",
    "!server/startServer.ts",
  ],
  coverageDirectory: "../coverage",
  ...createDefaultPreset(),
};

export default config;
