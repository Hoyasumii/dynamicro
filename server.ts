import http from 'node:http';

const app = http.createServer(async (req, res) => {


  const bodyBuffers: Array<Uint8Array> = [];

  for await (const chunk of req) {
    bodyBuffers.push(chunk);
  }

  console.log(JSON.parse(Buffer.concat(bodyBuffers).toString()));
  res.end("")
});

app.listen(8080).on("listening", () => {
  console.log(`🥳 Server is running at http://localhost:8080`)
});

