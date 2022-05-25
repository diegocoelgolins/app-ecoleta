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
//criando rotas
server.get("/", function(req, res) {
  return res.render("index.html")
})

server.get("/cadastro", function(req, res) {
  return res.render("page2.html")
})

server.get("/search", function(req, res) {
  return res.render("search-results.html")
})


//ligar o servidor
server.listen(3000)