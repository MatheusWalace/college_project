const Joi = require("joi")

const object = Joi.object().keys({
  id: Joi.number().required(),
  id_livro: Joi.number().required(),
  id_usuario: Joi.number().required(),
  data_reserva: Joi.date().required(),
  data_disponibilidade: Joi.date().required(),
})

module.exports = {
  object,
}
