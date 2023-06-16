const { Router } = require("express");
const {
  getFavoritos,
  postFavorito,
  deleteFavorito,
} = require("../controladores/favoritos");

const router = Router();

router.get("/", getFavoritos);

router.patch("/:id", postFavorito);

router.delete("/:id", deleteFavorito);

module.exports = router;
