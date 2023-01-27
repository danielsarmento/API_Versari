const routes = require('express').Router();
const controller_sindicos = require('../controllers/controller_sindicos');
const controller_clientes = require('../controllers/controller_clientes');
const controller_boletos = require('../controllers/controller_boletos');

// Rotas Sindicos
routes.post("/create/sindicos", controller_sindicos.createOne);
routes.post("/sindico", controller_sindicos.searchOne);
routes.get("/sindico", controller_sindicos.searchAll);

// Rotas Clientes
routes.post("/create/clientes", controller_clientes.createOne);
routes.post("/cliente", controller_clientes.searchOne);
routes.put("/cliente/editar", controller_clientes.updateOne);

//Rota Boletos
routes.post("/boletos", controller_boletos.solicitarBoleto);

module.exports = routes;


