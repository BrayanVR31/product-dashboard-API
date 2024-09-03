import { Request, Response, NextFunction } from "express";
import { StatusCodes, ReasonPhrases } from "http-status-codes";
import { z, ZodError } from "zod";

// Validate each field sent by body
export function validate<T>(schema: z.ZodType<T>) {
  return async (request: Request, response: Response, next: NextFunction) => {
    try {
      await schema.parseAsync(request.body);
      next();
    } catch (error) {
      // Handle validation zod errors
      if (error instanceof ZodError) {
        const details = error.errors.map(({ path, message }) => ({
          [path.join("")]: message,
        }));
        return response.status(StatusCodes.BAD_REQUEST).json({
          error: ReasonPhrases.BAD_REQUEST,
          details,
        });
      }
      // General server error
      return response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        error: ReasonPhrases.INTERNAL_SERVER_ERROR,
      });
    }
  };
}
