// import { RouteHandler, Routes } from "@/types/index";

import { DynoConfig } from "@/types";

export class Dyno<ServiceType extends object> {
  public basePath: string;
  #groups: DynoConfig<ServiceType>["groups"];
  #service: ServiceType;

  public constructor(basePath: string, config: DynoConfig<ServiceType>) {
    this.basePath = basePath;
    this.#groups = config.groups;
    this.#service = new config.service();
  }

  // public basePath: string;
  // public routes: Routes;

  // public constructor(basePath: string) {
  //   this.basePath = basePath;

  //   this.routes = {
  //     GET: {},
  //     POST: {},
  //     PUT: {},
  //     PATCH: {},
  //     DELETE: {},
  //   };
  // }

  // public GET(
  //   path: string,
  //   handler: (routeProperties: RouteHandler) => void,
  // ): this {
  //   this.routes.GET[path] = handler;
  //   return this;
  // }

  // public POST(
  //   path: string,
  //   handler: (routeProperties: RouteHandler) => void
  // ): this {
  //   this.routes.POST[path] = handler;
  //   return this;
  // }

  // public PUT(
  //   path: string,
  //   handler: (routeProperties: RouteHandler) => void
  // ): this {
  //   this.routes.PUT[path] = handler;
  //   return this;
  // }

  // public PATCH(
  //   path: string,
  //   handler: (routeProperties: RouteHandler) => void
  // ): this {
  //   this.routes.PATCH[path] = handler;
  //   return this;
  // }

  // public DELETE(
  //   path: string,
  //   handler: (routeProperties: RouteHandler) => void
  // ): this {
  //   this.routes.DELETE[path] = handler;
  //   return this;
  // }

  public send(): this {
    return this;
  }

}

class Service {}

const d = new Dyno("/", {
  groups: [],
  service: Service,
});
