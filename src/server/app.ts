import express from "express";
import morgan from "morgan";
import checkHealthStatus from "./middleware/checkHealthStatus.js";
import handlerEndpointNotFound from "./middleware/handlerEndpointNotFound.js";

const app = express();

app.use(morgan("dev"));

app.get("/", checkHealthStatus);

app.use(handlerEndpointNotFound);

export default app;
