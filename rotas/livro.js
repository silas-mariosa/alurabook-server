const { Router } = require("express")
const { getLivros } = require("../controladores/livros")

const router = Router()

router.get('/', (req, res) => {
    res.send("Olá mundo!")
})

router.post('/', getLivros)

router.patch('/', (req, res) =>{
    res.send("Você fez uma requisição do tipo PATCH")
})

router.delete('/', (req, res) =>{
    res.send("Você fez uma requisição do tipo DELETE")
})

module.exports = router