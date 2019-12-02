const routes = require("next-routes");

module.exports = routes()
  .add("index")
  .add("category", "categorias/:slug", "category")
  .add("product", "categorias/:slugCategory/:slug", "product");
