import { ZodSchema } from "zod";

export interface RoutePropertiesType {
  body?: ZodSchema,
  header?: ZodSchema,
  query?: ZodSchema,
  params?: ZodSchema,
  before?(): unknown | Promise<unknown> | void | Promise<void>;
  after?(): unknown | Promise<unknown> | void | Promise<void>;
}