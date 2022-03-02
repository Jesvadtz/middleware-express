const express = require("express");
const server = express();

const kodersRouter = require("./kodersRouter");

// Middleware de aplicación o de servidor
server.use(
  (request, response, next) => {
    console.log("Middleware de aplicación");
    next();
  },
  (request, response, next) => {
    console.log("Middleware de aplicación 2");
    next();
  }
);
server.use((request, response, next) => {
  console.log("Middleware de aplicación 3");
  next();
});

function middleware(request, response, next) {
  console.log("Middleware de una función externa");
  next();
}
server.use(middleware);

function middlewareRuta(request, response, next) {
  console.log("Middleware de ruta");
  next();
}
// montar el router de koders
server.use("/", kodersRouter);

server.get(
  "/",
  (request, response, next) => {
    console.log("Middleware de ruta GET /");
    next();
  },
  (request, response) => {
    response.json({
      message: "Hola, Koders!!",
    });
  }
);
server.post("/", middlewareRuta, (request, response) => {
  response.json({
    message: "Holi a todos",
  });
});

server.listen(8080, () => {
  console.log("Server running on port 8080");
});

// Middleware son funciones
// (request, response, netx) => {}

// Middleware a nivel de aplicación o de servidor : Se ejecuta en toda la aplicación
// Middleware a nivel de router
// Middleware a nivel de ruta
