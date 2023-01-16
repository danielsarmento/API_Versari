const mongoose = require('mongoose');

// Limitando o estilo do dado.
const EstruturaDados = new mongoose.Schema({
    
    nome: {type: String, required: true},
    telefone: {type: String, required: true},
    condominio: {type: Array, required: true},
    sindico: {type: Boolean, required: true}
});

//Criando a coleção dentro do BD
const SindicosCadastrados = mongoose.model('sindicos_cadastrados', EstruturaDados);

// Exportando a Coleção para ser acessada e criado o dado
module.exports = SindicosCadastrados;