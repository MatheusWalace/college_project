require("dotenv").config()
const path = require("path")

module.exports = {
  client: "mysql",
  connection: {
    host: process.env.DBHOST,
    user: process.env.DBNAME,
    password: process.env.DBPASSWORD,
    database: process.env.DBUSER,
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
