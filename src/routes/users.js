const route = "/users"
const api = require("../api/users")
// const auth = require("../api/auth")

module.exports = (router) => {
  router.route(route).post(api.insert)
  router
    .route(`${route}/:id`)
    .patch(api.update)
    .delete(api.remove)
}
