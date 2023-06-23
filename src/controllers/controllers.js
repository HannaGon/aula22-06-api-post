const db = require("../models/models")

const exibirTodos = async(request, response)=>{
    const todos = await db()
    response.status(200).send(todos)
}

const cadastrarAlunos = async(request, response)=>{
    todos = await db()
    const {
        nome, idade
    }=request.body[0]
    const novoAluno = {id:todos.length, nome, idade}
    todos.push(novoAluno)
    response.status(201).send(novoAluno)
}

const exibirPorId = async(request,response)=>{
    todos = await db()
    const{ id } = request.params
    const alunoEncontrado = todos.find(aluno => aluno.id == id)
    if(!alunoEncontrado) return response.status(404).send({
        message: `Aluno com ${id} não encontrado`
    })
    response.status(200).send(alunoEncontrado)
}

module.exports = {
    exibirTodos,
    cadastrarAlunos,
    exibirPorId
}