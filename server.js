const http = require("http");
const fs = require("fs");
const path = require("path");
const port = process.env.PORT || 3000;
const root = path.join(__dirname, "public");
http.createServer((req, res) => {
  let pathname = decodeURIComponent((req.url || "/").split("?")[0]);
  let file = path.join(root, pathname === "/" ? "index.html" : pathname);
  if (!file.startsWith(root)) { res.writeHead(403); return res.end("Forbidden"); }
  fs.readFile(file, (err, data) => {
    if (err) { res.writeHead(404); return res.end("Not found"); }
    const ext = path.extname(file);
    res.writeHead(200, {"Content-Type": ext === ".html" ? "text/html; charset=utf-8" : "application/octet-stream"});
    res.end(data);
  });
}).listen(port, "0.0.0.0", () => console.log(`GOBSHITE! listening on ${port}`));
