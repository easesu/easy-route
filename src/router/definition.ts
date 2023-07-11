import Page from "./page";
import Path from "./path";

export interface RouteRenderEntity {
  page?: Page;
  Component:
    | React.LazyExoticComponent<React.ComponentType>
    | React.ComponentType;
  children?: RouteRenderEntity[];
}

export type PathType = typeof Path;

export type ExtractPath<T extends Page> = T extends keyof PathType
  ? PathType[T]
  : never;

export type ExtractPathKey<T, K> = K extends keyof T ? T[K] : never;

export type ExtractPathParam<T extends Page> = ExtractPathKey<
  ExtractPath<T>,
  "params"
>;

export type TransformPathParamType<T> = T extends "number"
  ? number
  : T extends "string"
  ? string
  : never;

export type ExtractPathParamDefinition<T extends Page> =
  ExtractPathParam<T> extends never
    ? never
    : {
        [K in keyof ExtractPathParam<T>]: TransformPathParamType<
          ExtractPathParam<T>[K]
        >;
      };
