import { RouteHandler, Routes } from "@/types/index";

export class Route {
  public basePath: string;
  private routes: Routes;

  public constructor(basePath: string) {
    this.basePath = basePath;

    this.routes = {
      GET: {},
      POST: {},
      PUT: {},
      PATCH: {},
      DELETE: {},
    };
  }

  public GET(
    path: string,
    handler: (routeProperties: RouteHandler) => void
  ): this {
    this.routes.GET[path] = handler;
    return this;
  }

  public POST(
    path: string,
    handler: (routeProperties: RouteHandler) => void
  ): this {
    this.routes.POST[path] = handler;
    return this;
  }

  public PUT(
    path: string,
    handler: (routeProperties: RouteHandler) => void
  ): this {
    this.routes.PUT[path] = handler;
    return this;
  }

  public PATCH(
    path: string,
    handler: (routeProperties: RouteHandler) => void
  ): this {
    this.routes.PATCH[path] = handler;
    return this;
  }

  public DELETE(
    path: string,
    handler: (routeProperties: RouteHandler) => void
  ): this {
    this.routes.DELETE[path] = handler;
    return this;
  }
}
