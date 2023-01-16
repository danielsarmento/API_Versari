const SindicosCadastrados = require("../models/model_sindico");
let message = "";
let type = "";
// Página de Cadastro
exports.home = (req, res) => {
  setTimeout(() => {
    message = "";
    type = "";
  }, 1000);
  return res.render("cadastrarSindico", { message, type });
};
// Cadastro de Síndicos
exports.createSindico = async (req, res) => {
  const { nome, telefone, condominio } = req.body;

  if (!nome) {
    message = "Nome do síndico é requerido!";
    type = "alerta";
    return res.render("cadastrarSindico", { message, type });
  }
  if (!telefone) {
    message = "Telefone do síndico é requerido!";
    type = "alerta";
    return res.render("cadastrarSindico", { message, type });
  }
  if (!condominio) {
    message = "Condomínio do síndico é requerido!";
    type = "alerta";
    return res.render("cadastrarSindico", { message, type });
  }

  try {
    const cadastro = await SindicosCadastrados.create({
      nome: nome,
      telefone: telefone,
      condominio: condominio,
      sindico: true,
    });
    if (cadastro) {
      message = "Sindico Cadastrado Com Sucesso!";
      type = "sucesso";
      return res.redirect("/");
    } else {
      message = "Sindico Não Cadastrado!";
      type = "alerta";
      return res.redirect("/");
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};
