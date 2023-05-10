const Joi = require("joi")

const object = Joi.object().keys({
  id: Joi.number().required(),
  nome: Joi.string().required(),
})

module.exports = {
  object,
}
