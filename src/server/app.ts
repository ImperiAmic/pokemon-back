import express from "express";
import morgan from "morgan";
import checkHealthStatus from "./middleware/checkHealthStatus.js";
import handlerEndpointNotFound from "./middleware/handlerEndpointNotFound.js";
import pokemonsRouter from "../pokemon/router/pokemonsRouter.js";

const app = express();

app.use(morgan("dev"));

app.get("/", checkHealthStatus);

app.use("/pokemons", pokemonsRouter);

app.use(handlerEndpointNotFound);

export default app;
