import express from "express";
import checkHealthStatus from "./middleware/checkHealthStatus.js";

const app = express();

app.get("/", checkHealthStatus);

export default app;
