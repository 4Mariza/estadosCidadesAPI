var api = require('./module/estados_cidades')
 
var estadosCidades = api.estadosCidades

const getListaDeEstados = () => {
    const estadosJSON = {}
    const uf = []
    const quantidade = estadosCidades.estados.length
    estadosCidades.estados.forEach(function (estado){
        uf.push(estado.sigla)
    })

    estadosJSON.uf = uf
    estadosJSON.quantidade = quantidade

    return estadosJSON;
}

const getDadosEstado = (nomeEstado) =>{
    let nome = nomeEstado
    let dadosEstadoJSON = {}

    estadosCidades.estados.forEach(function(estado){
        if(estado.sigla.toLowerCase() == nome.toLowerCase()){
            dadosEstadoJSON.uf = estado.sigla
            dadosEstadoJSON.descricao = estado.nome
            dadosEstadoJSON.capital = estado.capital
            dadosEstadoJSON.regiao = estado.regiao
        }
    })

    return dadosEstadoJSON
}

const getCapitalEstado = (nomeEstado) => {
    let nome = nomeEstado
    let dadosEstadoJSON = {}

    estadosCidades.estados.forEach(function(estado){
        if(estado.sigla.toLowerCase() == nome.toLowerCase()){
            dadosEstadoJSON.uf = estado.sigla
            dadosEstadoJSON.descricao = estado.nome
            dadosEstadoJSON.capital = estado.capital
        }
    })

    return dadosEstadoJSON
}

const getEstadoRegiao = (regiao) => {
    let regiaoEstado = regiao
    let JSONRegioes = {}
    let estados = []

    estadosCidades.estados.forEach(function(estado){
        if (estado.regiao.toLowerCase() == regiaoEstado.toLowerCase()){
            let dadosRegiaoJSON = {}

            dadosRegiaoJSON.uf = estado.sigla
            dadosRegiaoJSON.descricao = estado.nome
            estados.push(dadosRegiaoJSON)
        }
    })
    
    JSONRegioes.regiao = regiao
    JSONRegioes.estados = estados
    return JSONRegioes
}

const getCapitalPais = () => {
    const capitaisJSON = {}
    const capitaisArray = []

    estadosCidades.estados.forEach(function(estado){
        //capital diferente de undefined testar
    })
}

// console.log(getListaDeEstados())
// console.log(getDadosEstado('RJ'))
// console.log(getCapitalEstado('AL'))
// console.log(getEstadoRegiao('Sudeste'));
