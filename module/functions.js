var api = require('./estados_cidades')
 
var estadosCidades = api.estadosCidades

const getListaDeEstados = () => {
    let status = false
    const estadosJSON = {}
    const uf = []
    const quantidade = estadosCidades.estados.length
    estadosCidades.estados.forEach(function (estado){
        uf.push(estado.sigla)
        status = true
    })

    estadosJSON.uf = uf
    estadosJSON.quantidade = quantidade

    if (status) 
        return estadosJSON
    else
        return false

}

const getDadosEstado = (nomeEstado) =>{
    let status = false
    let nome = nomeEstado
    let dadosEstadoJSON = {}

    estadosCidades.estados.forEach(function(estado){
        if(estado.sigla.toLowerCase() == nome.toLowerCase()){
            dadosEstadoJSON.uf = estado.sigla
            dadosEstadoJSON.descricao = estado.nome
            dadosEstadoJSON.capital = estado.capital
            dadosEstadoJSON.regiao = estado.regiao
            status = true
        }
    })

    if (status)
        return dadosEstadoJSON
    else
        return false
}

const getCapitalEstado = (nomeEstado) => {
    let status = false
    let nome = nomeEstado
    let capitalEstadoJSON = {}

    estadosCidades.estados.forEach(function(estado){
        if(estado.sigla.toLowerCase() == nome.toLowerCase()){
            capitalEstadoJSON.uf = estado.sigla
            capitalEstadoJSON.descricao = estado.nome
            capitalEstadoJSON.capital = estado.capital
            status = true
        }
    })

    if (status) 
        return capitalEstadoJSON
    else 
        return false
}

const getEstadoRegiao = (regiao) => {
    let status = false
    let regiaoEstado = regiao
    let JSONRegioes = {}
    let estados = []

    estadosCidades.estados.forEach(function(estado){
        if (estado.regiao.toLowerCase() == regiaoEstado.toLowerCase()){
            let dadosRegiaoJSON = {}

            dadosRegiaoJSON.uf = estado.sigla
            dadosRegiaoJSON.descricao = estado.nome
            estados.push(dadosRegiaoJSON)
            status = true
        }
    })
    JSONRegioes.regiao = regiao
    JSONRegioes.estados = estados
    
    if (status)
        return JSONRegioes
    else 
        return false
}

const getCapitalPais = () => {
    let status = false
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
            status = true
        }
    })

    capitaisJSON.capitais = capitaisArray

    if (status)
        return capitaisJSON
    else 
        return false
}

const getCidade = (sigla) => {
    let status = false
    const infoEstado = {}
    const cidadesArray = []

    estadosCidades.estados.forEach(function(estado){
        if(sigla.toUpperCase() == estado.sigla){

            infoEstado.uf = estado.sigla
            infoEstado.descricao = estado.nome
            infoEstado.quantidade_cidades = estado.cidades.length
        
        estado.cidades.forEach(function(cidadesUf){
            cidadesArray.push(cidadesUf.nome)

            status = true
        })
        infoEstado.cidades = cidadesArray
    }
    })

    if (status)
        return infoEstado
    else 
        return false
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
