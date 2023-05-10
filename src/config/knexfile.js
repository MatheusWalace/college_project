// Update with your config settings.
require("dotenv").config()
const path = require("path")

module.exports = {
  client: "mysql",
  connection: {
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
  },
  pool: {
    min: 2,
    max: 10,
    acquireTimeoutMillis: 10000,
  },
  migrations: {
    tableName: "knex_migrations",
    directory: path.resolve(__dirname, "./migrations"),
  },
  seeds: {
    directory: path.resolve(__dirname, "./seeds"),
  },
}
