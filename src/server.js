const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")

const bookRoutes = require("./routes/book")

const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(cors())

app.get("/", (req, res) => {
  res.send("Bem-vindo ao sistema de cadastro de livros!")
})

// Registrar as rotas do livro
app.use("/books", bookRoutes)

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
})
