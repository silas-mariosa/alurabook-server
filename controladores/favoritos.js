const {
    getTodosFavoritos,
} = require("../servicos/favorito")

function getTodosFavoritos(req, res){
    try {
        const livrosFavoritos = getTodosFavoritos()
        res.send(livrosFavoritos)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}