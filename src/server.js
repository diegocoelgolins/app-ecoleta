// Iniciando o servidor
const express = require("express")
const server = express()


// configurar pasta pública
server.use(express.static("public"))


// configurar caminhos da minha aplicação
// página inicial
server.get("/", function(req, res) {
  res.sendFile(__dirname + "/views/index.html")
})

//criando rotas
server.get("/page2", function(req, res) {
  res.sendFile(__dirname + "/views/page2.html")
})


//ligar o servidor
server.listen(3000)