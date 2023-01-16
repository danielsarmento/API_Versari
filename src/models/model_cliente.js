const mongoose = require('mongoose');

// Limitando o estilo do dado.
const EstruturaDados = new mongoose.Schema({
    
    nome: {type: String, required: true},
    telefone: {type: String, required: true}
});

//Criando a coleção dentro do BD
const ClientesCadastrados = mongoose.model('clientes_cadastrados', EstruturaDados);

// Exportando a Coleção para ser acessada e criado o dado
module.exports = ClientesCadastrados;