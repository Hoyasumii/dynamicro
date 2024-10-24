import http from "node:http";
import { Route } from "./Route";
import { Routes } from "@/types/index";

export class Application extends Route {
  private server = http.createServer;
  private paths: Record<string, Routes> = {};

  constructor() {
    super("/");
    this.paths["/"] = this.routes;
  }

  private async bodyParser(request: http.IncomingMessage) {
    const bodyBuffers: Array<Uint8Array> = [];

    for await (const chunk of request) {
      bodyBuffers.push(chunk);
    }

    return JSON.parse(Buffer.concat(bodyBuffers).toString());
  }

  public use(route: Route) {
    this.paths[route.basePath] = route.routes;
  }

  public ship(
    port: number,
    message: string = `🥳 Server is running at http://localhost:${port}`
  ) {
    this.server(async (request, response) => {
      const body = await this.bodyParser(request);
      // TODO: QUERY
      // TODO: Params
      // request.body = 1;
    })
      .listen(port)
      .on("listening", () => {
        console.log(message);
      });
  }
}
// application/data/users/:id/dashboard
