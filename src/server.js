// Iniciando o servidor
const express = require("express")
const server = express()


// configurar pasta pública
server.use(express.static("public"))

//utlilizando o template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
  express: server,
  noCache: true
})

// configurar caminhos da minha aplicação
// página inicial
server.get("/", function(req, res) {
  return res.render("index.html")
})

//criando rotas
server.get("/page2", function(req, res) {
  return res.render("page2.html")
})


//ligar o servidor
server.listen(3000)