const porta = 3003

const express = require('express')
const app = express()

const bancoDeDados = require ('./bancoDeDados')

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))

app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvaProdutos({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //Converte em JSON
})

app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvaProdutos({
        nome: req.body.nome,
        preco: req.body.preco,
        id: req.params.id
    })
    res.send(produto) //Converte em JSON
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto) //Converte em JSON
})

// app.get('/produtos', (req, res, next) => {
//     res.send({nome: 'Notebook', preco: 2499.99}) //send converte pra JSON
// })

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}`)
})