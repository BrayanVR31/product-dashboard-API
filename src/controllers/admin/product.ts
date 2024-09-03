import { Request, Response, NextFunction } from "express";
import { StatusCodes, ReasonPhrases } from "http-status-codes";
import { Product } from "../../models";
import { error as errors } from "../../helpers";

type Params = { id: string };
interface ControllerError extends Error {
  status?: number;
}

// Home
export async function home(request: Request, response: Response) {
  try {
    const results = await Product.Model.find();
    return response
      .status(StatusCodes.OK)
      .json({ message: ReasonPhrases.OK, results });
  } catch (error) {
    console.log(error);
  }
}

// Save
export async function save(
  request: Request,
  response: Response,
  next: NextFunction
) {
  try {
    // Save data
    const results = await Product.Model.create({ ...request.body });
    return response.status(StatusCodes.CREATED).json({
      results,
      message: ReasonPhrases.CREATED,
    });
  } catch (error) {
    let controllerError: ControllerError = new Error();
    if (error instanceof Error) {
      console.log(error.message);
      controllerError.status = StatusCodes.BAD_REQUEST;
      controllerError.message = JSON.stringify(
        errors.formatErrors(error.message)
      );
      next(controllerError);
    }
  }
}

// Edit
export async function edit(request: Request<Params>, response: Response) {
  try {
    const {
      params: { id },
    } = request;
    const data = await Product.Model.findById(id);
    return response.json(data);
  } catch (error) {}
}

// Update
export async function update(request: Request<Params>, response: Response) {
  try {
    const { id: _id } = request.params;
    const product = await Product.Model.findOneAndUpdate(
      { _id },
      { ...request.body },
      { returnDocument: "after" }
    );
    return response.json({
      product,
      message: "Product was updated with success",
    });
  } catch (error) {
    console.log(error);
  }
}

// Delete
export async function destroy(request: Request<Params>, response: Response) {
  try {
    const { id: _id } = request.params;
    const deleted = await Product.Model.deleteOne({ _id });
    return response.status(204).end();
  } catch (error) {}
}
