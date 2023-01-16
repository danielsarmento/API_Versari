const axios = require('axios');

exports.solicitarBoleto = async (req, res) => {

    const {cpf_cnpj} = req.body
    const URL = 'https://appf.com21.com.br/financeiro-web/api_cobranca/publico/boletos/solicitacoes';
    

    try {        
        const boletos = await axios.post(URL, {
                numeroTelefoneClienteGroup: "8330354399",
                numeroDocumento: `${cpf_cnpj}`

        });
        if(boletos.data.length == 0){
            return res.json({existe: false});
        } else {
            return res.json({existe: true, boleto: boletos.data[0]});
        }

    }catch (err) {
        res.status(500).send({ error: err.message });
    };
}