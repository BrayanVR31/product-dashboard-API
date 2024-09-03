import { isValidObjectId, Types } from "mongoose";
import { database } from "../config";

// Check each id if has mongoose object id format
export function matchObjectId(id: string | string[] | null): boolean {
  try {
    if (!id) return false;
    // Id item
    if (typeof id === "string") {
      return isValidObjectId(id);
    }
    // Ids array
    const objectIds: number[] = id.map((id) => +isValidObjectId(id));
    return Boolean(objectIds.reduce((prev, current) => prev * current, 1));
  } catch (error) {
    return false;
  }
}

// Check if exists the references of each foreign id in a specific model
export function existReferencesFromDoc(collection: string) {
  return async (id: string[] | string | null) => {
    try {
      let condition: { _id: Types.ObjectId }[];
      if (!id) return false;
      if (typeof id === "string") condition = [{ _id: new Types.ObjectId(id) }];
      else condition = id.map((id) => ({ _id: new Types.ObjectId(id) }));
      const connection = await database.getConnection();
      const query = await connection?.db?.collections();
      console.log(query?.map((q) => q.collectionName));
      const results = await connection?.db
        ?.collection(collection)
        .find()
        .toArray();
      console.log("results: ", results);
    } catch (error) {
      console.log("error: ", error);
      return false;
    }
  };
}
