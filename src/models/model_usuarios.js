const mongoose = require('mongoose');

// Limitando o estilo do dado.
const EstruturaDados = new mongoose.Schema({
    
    email: {type: String, required: true, unique: true},
    senha: {type: String, required: true}
});

//Criando a coleção dentro do BD
const UsuariosCadastrados = mongoose.model('usuarios_cadastrados', EstruturaDados);

// Exportando a Coleção para ser acessada e criado o dado
module.exports = UsuariosCadastrados;