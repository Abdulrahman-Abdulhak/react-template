import { MergedType } from "../../../types";

export const mergeObjects = <T extends any[]>(...objects: T): MergedType<T> => {
  return objects.reduce((acc, obj) => ({ ...acc, ...obj }), {});
};
