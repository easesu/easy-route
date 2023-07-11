import {
  ExtractPathParamDefinition,
  ExtractPathParam,
  PathType,
} from "./definition";
import Page from "./page";
import path from "./path";
import { generatePath as reactRouterGeneratePath } from "react-router-dom";

export const isPageWithParams = <T extends Page>(
  page: T
): ExtractPathParam<T> extends never ? false : true => {
  if (page in path) {
    const pagePath = path[page as keyof PathType];
    if ("params" in pagePath && pagePath.params) {
      return true as any;
    }
  }
  return false as any;
};

export type GeneratePathArgs<T extends Page> = ExtractPathParam<T> extends never
  ? [T]
  : [T, ExtractPathParamDefinition<T>];

export const generatePath = <T extends Page>(...args: GeneratePathArgs<T>) => {
  if (args[0] in path) {
    const currentPath = path[args[0] as keyof PathType];
    return reactRouterGeneratePath(currentPath.path, args[1] as any);
  }
  return "";
};

export const extractParams = <T extends Page>(
  page: T,
  params: Record<string, any>
): ExtractPathParamDefinition<T> extends never
  ? {}
  : ExtractPathParamDefinition<T> => {
  if (!(page in path)) {
    return {} as any;
  }
  const router = path[page as keyof PathType];
  const res: { [k: string]: any } = {};
  if ("params" in router) {
    Object.entries(router.params).forEach(([k, t]) => {
      let value: any = params[k];
      switch (t as any) {
        case "number":
          value = Number(value);
          break;
        case "string":
          value = String(value);
          break;
        default:
      }
      res[k] = value;
    });
  }
  return res as ExtractPathParamDefinition<T>;
};
