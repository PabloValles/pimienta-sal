let express = require("express");
let mainController = require("../controllers/mainController");
let router = express.Router();

/* GET home page. */
router.get("/", mainController.index);
router.get("/detalle/:id/:nombre?", mainController.detalleMenu);

module.exports = router;
