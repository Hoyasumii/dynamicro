export interface RouteHandler<
  Body = unknown,
  Params = unknown,
  Query = unknown,
  Service = unknown
> {
  body: Body;
  params: Params;
  query: Query;
  service: Service;
  set(value: number | string | boolean): void;
}
