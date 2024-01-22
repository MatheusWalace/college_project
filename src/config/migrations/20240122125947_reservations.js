/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("reservations", (table) => {
    table.increments("id").primary()
    table.integer("id_livro").notNullable().unsigned()
    table.integer("id_usuario").notNullable().unsigned()
    table.date("data_reserva").notNullable()
    table.date("data_disponibilidade").notNullable()
    table.foreign("id_livro").references("inbook.id")
    table.foreign("id_usuario").references("users.id")
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("reservations")
}
