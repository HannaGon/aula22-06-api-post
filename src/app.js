const express = require("express")
const postRouter = require("./routes/routes")

const app = express()

app.use(express.json())
app.use("/alunos", postRouter)

module.exports = app
