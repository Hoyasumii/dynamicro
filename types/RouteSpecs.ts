import { RouteHandler } from "./RouteHandler";

export interface RouteSpecs {
  handler(content: RouteHandler): void | Promise<void>;
  properties: unknown;
}