/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("loans", (table) => {
    table.increments("id").primary()
    table.integer("id_livro").notNullable().unsigned()
    table.integer("id_usuario").notNullable().unsigned()
    table.date("data_emprestimo").notNullable()
    table.date("data_devolucao_prevista").notNullable()
    table.float("multa")
    // table.foreign("id_livro").references("livros.id")
    // table.foreign("id_usuario").references("usuarios.id")
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("loans")
}
