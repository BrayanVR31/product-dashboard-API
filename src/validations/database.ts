import {
  ValidatorConstraintInterface,
  ValidatorConstraint,
  ValidationArguments,
} from "class-validator";
import { isValidObjectId } from "mongoose";

@ValidatorConstraint({ name: "findId", async: true })
export class FindIdInCollection implements ValidatorConstraintInterface {
  async validate(id: string[], args: ValidationArguments) {
    try {
      console.log("is ObjectId: ", isValidObjectId(id));
      if (id.length === 0) return false;
      return isValidObjectId(id);
    } catch (error) {
      return false;
    }
  }
  defaultMessage(args: ValidationArguments) {
    return `($value): Error while we trying to check ObjectId.`;
  }
}
