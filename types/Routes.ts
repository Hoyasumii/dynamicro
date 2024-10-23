import { type HTTPMethods } from "./HTTPMethods";
import { RouteHandler } from "./RouteHandler";

export type Routes = {
  [HTTPMethod in HTTPMethods]: Record<
    string,
    (routeProperties: RouteHandler) => void
  >;
};
