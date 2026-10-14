import http from 'node:http';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root = path.join(path.dirname(fileURLToPath(import.meta.url)), 'public');
const types = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.png':'image/png','.svg':'image/svg+xml'};
const server = http.createServer(async (req,res) => {
  const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
  let file = path.join(root, pathname === '/' ? 'index.html' : pathname.replace(/^\/+/,''));
  if (!file.startsWith(root)) { res.writeHead(403); return res.end('Forbidden'); }
  try { const body = await readFile(file); res.writeHead(200, {'Content-Type': types[path.extname(file)] || 'application/octet-stream','Cache-Control':'no-cache'}); res.end(body); }
  catch { try { const body = await readFile(path.join(root,'index.html')); res.writeHead(200, {'Content-Type':types['.html'],'Cache-Control':'no-cache'}); res.end(body); } catch { res.writeHead(404); res.end('Not found'); } }
});
const port = Number(process.env.PORT || 3000);
server.listen(port, '0.0.0.0', () => console.log(`GOBSHITE! listening on ${port}`));
