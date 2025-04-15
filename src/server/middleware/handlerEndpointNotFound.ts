import { Request, Response } from "express";

const handlerEndpointNotFound = (_req: Request, res: Response): void => {
  res.status(404).json({ error: "Endpoint not found" });
};

export default handlerEndpointNotFound;
