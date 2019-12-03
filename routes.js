const routes = require("next-routes");

module.exports = routes()
  .add("index")
  .add("contacto")
  .add("categorias")
  .add("quienes-somos")
  .add("category", "/categorias/:slug", "category")
  .add("product", "/categorias/:slugCategory/:slug", "product");
