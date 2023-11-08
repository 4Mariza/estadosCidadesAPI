/*********************************************************************************************
 * Objetivo: Criação de um API para manipular dados de Estados e Cidades
 * Data: 01/11/2023
 * Autor: Maria Luiza Gomes de Almeida
 * Versão: 1.0
*********************************************************************************************/

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const { request } = require('http')

//criando um objeto para manipular as requisições da API
const app = express()

app.use((request,response,next) =>{
    //HEADER : especificar as restricoes da API (quem pode acesar e quais metodos podem ser requisitados)
    response.header('Access-Control-Allow-Origin', '*')
    response.header('Access-Control-Allow-Methods', 'GET')

    //ativa as configurações de permissão no cors
    app.use(cors())

    //continuar processando outras coisas dentro da API
    next()
})

//Endpoints: pontos de parada (como nossa API ficará escutando as requisições)
app.get('/estados/sigla', cors(), async function(request, response, next){
    
    let controleEstadosCidades = require('./module/functions')
    let listaEstados = controleEstadosCidades.getListaDeEstados()

    if (listaEstados){
        response.json(listaEstados)
        response.status(200)
    } else {
        response.status(404)
        response.json({erro: 'Item não encontrado'})
    }
})

app.get('/estado/sigla/:uf', cors(), async function(request, response, next){

   let siglaEstado = request.params.uf

   let controleDadosEstado = require('./module/functions')
   let dadosEstado = controleDadosEstado.getDadosEstado(siglaEstado)

   if (dadosEstado){
       response.json(dadosEstado)
       response.status(200)
   } else {
       response.status(404)
       response.json({erro: 'Item não encontrado'})
   }
})

//usando outra forma de pegar o valor da sigla; via query
app.get('/estado/capital', cors(), async function(request, response, next){

    //http://localhost:8080/estado/capital?uf=CE <--- fica assim
    let siglaEstado = request.query.uf

    let controleCapitalEstado = require('./module/functions')
    let capitalEstado = controleCapitalEstado.getCapitalEstado(siglaEstado)

    if (capitalEstado){
        response.json(capitalEstado)
        response.status(200)
    } else {
        response.status(404)
        response.json({erro: 'Item não encontrado'})
    }
})

app.get('/regiao/estados/:regiao', cors(), async function(request, response, next){

    let regiaoPais = request.params.regiao

    let controleEstadosRegiao = require('./module/functions')
    let estadosRegiao = controleEstadosRegiao.getEstadoRegiao(regiaoPais)

    if (estadosRegiao){
        response.json(estadosRegiao)
        response.status(200)
    } else {
        response.status(404)
        response.json({erro: 'Item não encontrado'})
    }
})

app.get('/pais/capitais', cors(), async function(request, response, next){

    let controleCapitais = require('./module/functions')
    let capitaisPais = controleCapitais.getCapitalPais()

    if (capitaisPais){
        response.json(capitaisPais)
        response.status(200)
    } else {
        response.status(404)
        response.json({erro: 'Item não encontrado'})
    }
})

app.get('/estado/cidades/sigla/:uf', cors(), async function(request, response, next){

    let siglaEstado = request.params.uf

    let controleCidades = require('./module/functions')
    let cidadesEstado =  controleCidades.getCidade(siglaEstado)

    if (cidadesEstado){
        response.json(cidadesEstado)
        response.status(200)
    } else {
        response.status(404)
        response.json({erro: 'Item não encontrado'})
    }    
})

app.listen('8080', function(){
    console.log('API funcionando!')
})
