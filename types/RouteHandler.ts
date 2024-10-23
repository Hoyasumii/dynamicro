export interface RouteHandler<
  Body = unknown,
  Params = unknown,
  Query = unknown
> {
  body: Body;
  params: Params;
  query: Query;
  setStatus(value: number): void;
}
