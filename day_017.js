// Desafio - Dia 17: Criar um servidor com Node.js.
const { createServer } = require("http");

const server = createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "text/html" });
  response.write('<h1>Servidor com Node.js</h1>');
  response.end();
});

server.listen(3333, () => {
  console.log("Server is running: http://localhost:3333");
});