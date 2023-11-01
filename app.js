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

    response.json(listaEstados)
    response.status(200)
})

app.listen('8080', function(){
    console.log('API funcionando!')
})
