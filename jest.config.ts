import type { Config } from "jest";

const config: Config = {
  verbose: true,
  testMatch: [
    "**/**/*.test.[jt]s?(x)",
    "**/?(*.)+(test).[jt]s?(x)"
  ], 
  preset: "ts-jest",
  testPathIgnorePatterns: ["/node_modules/"],
};

export default config;
