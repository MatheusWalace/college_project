const Joi = require("joi")

const object = Joi.object().keys({
  id: Joi.number().required(),
  id_livro: Joi.number().required(),
  id_usuario: Joi.number().required(),
  data_emprestimo: Joi.date().required(),
  data_devolucao_prevista: Joi.date().required(),
  multa: Joi.number(),
})

module.exports = {
  object,
}
