import { Request, Response } from "express";
import checkHealthStatus from "../checkHealthStatus.js";

describe("Given teh checkHealthStatus middleware", () => {
  describe("When it receives a response", () => {
    const req = {} as Request;
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as Pick<Response, "status" | "json">;

    beforeEach(() => {
      jest.clearAllMocks();
    });

    test("Then it should call the received response's method with a 200 status", () => {
      const expectedStatus = 200;

      checkHealthStatus(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(expectedStatus);
    });

    test("Then it should call the received response's method with an 'OK' message", () => {
      const expectedMessage = { message: "OK" };

      checkHealthStatus(req as Request, res as Response);

      expect(res.json).toHaveBeenCalledWith(expectedMessage);
    });
  });
});
