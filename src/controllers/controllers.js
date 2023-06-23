const db = require("../models/models")

const exibirTodos = async (request, response) => {
    const todos = await db()
    response.status(200).send(todos)
}

const cadastrarAluno = async (request, response) => {
    const todos = await db()
    const { nome, idade } = request.body
    const novoAluno = { id: todos.length, nome, idade }
    todos.push(novoAluno)
    response.status(201).send(novoAluno)
}

const exibirPorId = async (request, response) => {
    const todos = await db()
    const id = request.params.id
    const alunoEncontrado = todos.find(aluno => aluno.id == id)
    if (!alunoEncontrado) {
        response.status(404).send({ message: `Aluno com ID ${id} não encontrado` })
    } else {
        response.status(200).send(alunoEncontrado)
    }
}

module.exports = {
    exibirTodos,
    exibirPorId,
    cadastrarAluno
}
