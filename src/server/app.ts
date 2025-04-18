import express from "express";
import morgan from "morgan";
import cors from "cors";
import checkHealthStatus from "./middleware/checkHealthStatus.js";
import handlerEndpointNotFound from "./middleware/handlerEndpointNotFound.js";
import pokemonsRouter from "../pokemon/router/pokemonsRouter.js";

const app = express();

app.use(morgan("dev"));
app.use(
  cors({
    origin: [
      /^http:\/\/localhost:\d+/,
      /imperiamic-pokemon-front\.netlify\.app/,
    ],
    credentials: true,
  }),
);
app.use(express.json());

app.get("/", checkHealthStatus);

app.use("/pokemon", pokemonsRouter);

app.use(handlerEndpointNotFound);

export default app;
