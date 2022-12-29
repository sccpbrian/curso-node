/*const express = require('express')
const app = express()
const port = 3000

app.get('/', function (req, res){
    res.sendFile(__dirname + "/front-end/index.html");
});

app.get('/home', (req, res) => res.send('mamandalinda'))

app.get('/user/:cargo/:nome', function (req, res) {
    res.send(req.params)
})

app.listen(port, () => 
console.log(`Servidor rodando na porta ${port}!`))*/
const Sequelize = require('sequelize')
const sequelize = new Sequelize('kwabanga', 'root', 'b*0707',{
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate().then(function(){
    console.log('lari linda')
}).catch(function(erro){
    console.log('deu ruim vida:'+erro)
})

