const route = "/book"
const api = require("../api/book")
// const auth = require("../api/auth")

module.exports = (router) => {
  router.route(route).get(api.get).post(api.insert)
  router.route(`${route}/search`).post(api.search)
  router
    .route(`${route}/:id`)
    .get(api.getById)
    .patch(api.update)
    .delete(api.remove)
}
