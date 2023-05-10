/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("devolution", (table) => {
    table.increments("id").primary()
    table.integer("id_emprestimo").notNullable().unsigned()
    table.date("data_devolucao").notNullable()
    table.foreign("id_emprestimo").references("emprestimos.id")
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("devolution")
}
