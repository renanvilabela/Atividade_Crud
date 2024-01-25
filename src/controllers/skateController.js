const SkateService = require('../services/skateService');

module.exports = {
    buscarTodos: async (req, res)=>{
        let json = {error:'', result:[]};

        let skates = await SkateService.buscarTodos();

        for(let i in skates){
            json.result.push({
                codigo: skates[i].codigo,
                descricao: skates[i].modelo
            });
        }
        res.json(json);
    }
}