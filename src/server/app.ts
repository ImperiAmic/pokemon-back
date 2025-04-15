import express from "express";
import checkHealthStatus from "./middleware/checkHealthStatus.js";
import handlerEndpointNotFound from "./middleware/handlerEndpointNotFound.js";

const app = express();

app.get("/", checkHealthStatus);

app.use(handlerEndpointNotFound);

export default app;
