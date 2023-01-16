const ClientesCadastrados = require("../models/model_cliente");

exports.createOne = async (req, res) => {
    const{ nome, telefone} = req.body;
    try{
        const cliente_cadastrado = await ClientesCadastrados.create({nome, telefone})
        return res.json({cliente_cadastrado});
    } catch (err) {
        res.status(500).send({ error: err.message });
      };
}

exports.searchOne = async (req, res) => {
    const{telefone} = req.body;
    try{
        const data = await ClientesCadastrados.findOne({telefone})
        if(data == null){
            return res.json({isCliente: false});
        } else {
            return res.json({isCliente: true, data});
        }
        
    } catch (err) {
        res.status(500).send({ error: err.message });
      };
};

exports.updateOne = async (req, res) => {
    const {nome, telefone} = req.body;
    console.log(nome, telefone)
    try{
        const cliente_editado = await ClientesCadastrados.updateOne({telefone: telefone}, {nome, telefone});
        return res.status(200).json({editado: true, cliente_editado})
            
    }catch (err) {
        res.status(500).send({ editado: false ,error: err.message });
    };
}