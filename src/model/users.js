const Joi = require("joi")

const object = Joi.object().keys({
  name: Joi.string().required(),
  lastname: Joi.string().required(),
  birthdate: Joi.date(),
  legaldocument: Joi.string().required(),
  street: Joi.string().required(),
  neighborhood: Joi.string().required(),
  city: Joi.string().required(),
  cep: Joi.string().required(),
  number: Joi.number().required(),
  cellphone: Joi.string(),
  email: Joi.string().required(),
  password: Joi.string().required(),
})

module.exports = {
  object,
}
