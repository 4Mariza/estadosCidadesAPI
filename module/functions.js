var api = require('./estados_cidades')
 
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
        if(estado.capital_pais != undefined){
            let dadosEstadosCapitais = {}

            dadosEstadosCapitais.capital_atual = estado.capital_pais.capital
            dadosEstadosCapitais.uf = estado.sigla
            dadosEstadosCapitais.descricao = estado.nome
            dadosEstadosCapitais.capital = estado.capital
            dadosEstadosCapitais.regiao = estado.regiao
            dadosEstadosCapitais.capital_pais_ano_inicio = estado.capital_pais.ano_inicio
            dadosEstadosCapitais.capital_pais_ano_termino = estado.capital_pais.ano_fim

            capitaisArray.push(dadosEstadosCapitais)
        }
    })

    capitaisJSON.capitais = capitaisArray
    return capitaisJSON
}

const getCidade = (sigla) => {
    const infoEstado = {}
    const cidadesArray = []

    estadosCidades.estados.forEach(function(estado){
        if(sigla.toUpperCase() == estado.sigla){

            infoEstado.uf = estado.sigla
            infoEstado.descricao = estado.nome
            infoEstado.quantidade_cidades = estado.cidades.length
        
        estado.cidades.forEach(function(cidadesUf){
            cidadesArray.push(cidadesUf.nome)
        })
        infoEstado.cidades = cidadesArray
    }
    })

    return infoEstado
}

module.exports = {
    getListaDeEstados,
    getCidade,
    getCapitalEstado,
    getCapitalPais,
    getEstadoRegiao,
    getDadosEstado
}

console.log(getListaDeEstados())
console.log(getDadosEstado('SP'))
console.log(getCapitalEstado('AL'))
console.log(getEstadoRegiao('Sul'));
console.log(getCapitalPais());
console.log(getCidade('AC'));
