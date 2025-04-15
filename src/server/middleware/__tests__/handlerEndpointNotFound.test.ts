import { Request, Response } from "express";
import handlerEndpointNotFound from "../handlerEndpointNotFound.js";

describe("Given the handlerEndpointNotFound middleware", () => {
  describe("When it receives a response", () => {
    const req = {} as Request;
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() } as Pick<
      Response,
      "status" | "json"
    >;

    beforeEach(() => {
      jest.clearAllMocks();
    });

    test("Then it should call the received response's method with a 404 status", () => {
      const expectedStatus = 404;

      handlerEndpointNotFound(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(expectedStatus);
    });

    test("Then it should call the received response's method with an 'Endpoint not found' error message", () => {
      const expectedMessage = { error: "Endpoint not found" };

      handlerEndpointNotFound(req as Request, res as Response);

      expect(res.json).toHaveBeenCalledWith(expectedMessage);
    });
  });
});
