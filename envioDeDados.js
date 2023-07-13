const XLSX = require('xlsx');
const axios = require('axios');

async function mean(){
    // Nome do arquivo Excel
    const arquivo = 'condominios.xlsx';
    
    // Lê o arquivo Excel
    const workbook = XLSX.readFile(arquivo);
    
    // Obtém o nome da primeira planilha
    const nomePlanilha = workbook.SheetNames[0];
    
    // Obtém os dados da primeira planilha como um objeto JSON
    const dadosPlanilha = XLSX.utils.sheet_to_json(workbook.Sheets[nomePlanilha]);
    
    await dadosPlanilha.map((data) => {
        axios.post('https://api-versari.vercel.app/create/sindicos', {
            "nome": data['Síndico(a)'],
            "telefone": 55 + data['Telefone Síndico(a)'],
            "condominio": data['Condomínio']
        })
        //console.log(data['Condomínio'])
    })
    // Exibe os dados
    console.log(dadosPlanilha[0]['Condomínio']);

}

mean()