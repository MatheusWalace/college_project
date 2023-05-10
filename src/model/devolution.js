const Joi = require("joi")

const object = Joi.object().keys({
  id: Joi.number().required(),
  id_emprestimo: Joi.number().required(),
  data_devolucao: Joi.date().required(),
})

module.exports = {
  object,
}
