const Joi = require("joi")

const object = Joi.object().keys({
  id: Joi.number().required(),
  nome: Joi.string().required(),
  data_nascimento: Joi.date(),
  endereco: Joi.string(),
  telefone: Joi.string(),
  email: Joi.string().required(),
})

module.exports = {
  object,
}
