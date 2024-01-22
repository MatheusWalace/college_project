/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("renovation", (table) => {
    table.increments("id").primary()
    table.integer("id_emprestimo").notNullable().unsigned()
    table.date("data_renovacao").notNullable()
    table.date("nova_data_devolucao_prevista").notNullable()
    table.foreign("id_emprestimo").references("loans.id")
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("renovation")
}
