const db = require("../models/models")

const exibirTodos = async(req,res)=>{ //req = request, res = response. ao usar abreviado, deve-se continuar usando abreviado abaixo
    const todos = await db()
    res.status(200).send(todos) // res sendo utilizado pois foi abreviado no início
}

const exibirPorId = async(req,res)=>{
    todos = await db()
    const {id} = req.params
    const alunoEncontrado = todos.find(aluno => aluno.id == id)
    if (!alunoEncontrado) return res.status(404).send({ //! signfica que n encontrou nada   
            message: `aluno com iD ${id} não encontrado`
        })
        res.status(200).send(alunoEncontrado)
}
const cadastrarAluno = async(req, res)=>{
    todos = await db()
    const {
        nome,idade
    }=req.body[0]
    const novoAluno = {id:todos.length, nome, idade}
    todos.push(novoAluno)
    res.status(201).send(novoAluno)
}

module.exports={
    exibirTodos,
    exibirPorId,
    cadastrarAluno
}