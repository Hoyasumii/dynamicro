import http from "node:http";

export class Application {
  private server = http.createServer;

  private bodyParser(request: http.IncomingMessage) {}

  public use() {}

  public ship(
    port: number,
    message: string = `🥳 Server is running at http://localhost:${port}`
  ) {
    this.server(async (request, response) => {
      const body = this.bodyParser(request);
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
