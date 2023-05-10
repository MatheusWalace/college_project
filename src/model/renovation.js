const Joi = require("joi")

const object = Joi.object().keys({
  id: Joi.number().required(),
  id_emprestimo: Joi.number().required(),
  data_renovacao: Joi.date().required(),
  nova_data_devolucao_prevista: Joi.date().required(),
})

module.exports = {
  object,
}
