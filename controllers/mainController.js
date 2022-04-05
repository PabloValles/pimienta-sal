let mainController = {
  index: function (req, res, next) {
    res.render("index", { title: "Pimienta & Sal" });
  },
  detalleMenu: function (req, res, next) {
    let idMenu = req.params.id;

    let menus = [
      {
        idMenuDB: 0,
        nombreMenuDB: "Carpaccio fresco",
        detalleMenuDB: "Entrada Carpaccio de salmón con cítricos",
        precioMenuDB: 65.5,
        imgMenuDB: "Carpaccio-de-salmon.jpg",
      },
      {
        idMenuDB: 1,
        nombreMenuDB: "Risotto de berenjena",
        detalleMenuDB: "Risotto de berenjena y queso de cabra",
        precioMenuDB: 47.0,
        imgMenuDB: "Risotto-berenjena-queso-cabra.jpg",
      },
      {
        idMenuDB: 2,
        nombreMenuDB: "Mousse de arroz",
        detalleMenuDB: "Mousse de arroz con leche y aroma de azahar",
        precioMenuDB: 27.5,
        imgMenuDB: "Mousse-de-arroz-con-leche.jpg",
      },
      {
        idMenuDB: 3,
        nombreMenuDB: "Espárragos blancos",
        detalleMenuDB:
          "Espárragos blancos con vinagreta de verduras y jamón ibérico",
        precioMenuDB: 37.5,
        imgMenuDB: "esparragos.png",
      },
    ];

    res.render("detalleMenu", {
      title: "Pimienta & Sal",
      id: idMenu,
      menus: menus,
    });
  },
};

module.exports = mainController;
