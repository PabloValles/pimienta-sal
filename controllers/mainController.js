const mainModel = require("../models/mainModel");

let mainController = {
  index: function (req, res, next) {
    res.render("index", {
      title: "Pimienta & Sal",
      mainModelAbout: mainModel.about,
    });
  },
  detalleMenu: function (req, res, next) {
    let idMenu = req.params.id;
    let menuCompleto = mainModel.menus.find((e) => e.idMenuDB == idMenu);

    res.render("detalleMenu", {
      title: "Pimienta & Sal",
      id: idMenu,
      menus: mainModel.menus,
      menuCompleto: menuCompleto,
    });
  },
};

module.exports = mainController;
