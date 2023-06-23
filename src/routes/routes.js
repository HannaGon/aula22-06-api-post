const express = require("express")
const postController = require("../controllers/controllers")

const router = express.Router()

router.get("/exibir", postController.exibirTodos)
router.get("/id/:id", postController.exibirPorId)

router.post("/criar", postController.cadastrarAluno)

module.exports = router;