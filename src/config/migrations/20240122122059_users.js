/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("users", (table) => {
    table.increments("id").primary()
    table.string("name").notNullable()
    table.string("lastname").notNullable()
    table.date("birthdate").notNullable()
    table.string("legaldocument").notNullable()
    table.string("street").notNullable()
    table.string("neighborhood").notNullable()
    table.string("city").notNullable()
    table.string("cep").notNullable()
    table.bigint("number").notNullable()
    table.string("cellphone").notNullable()
    table.string("email").notNullable()
    table.string("password").notNullable()
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("users")
}
