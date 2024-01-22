const Joi = require("joi")

const object = Joi.object().keys({
  id: Joi.number().required(),
  titulo: Joi.string().required(),
  edicao: Joi.number(),
  num_paginas: Joi.number(),
  ano_publicacao: Joi.number(),
  isbn: Joi.string().length(13),
  num_exemplares: Joi.number().required(),
  idioma: Joi.string().required().max(50),
  id_autor: Joi.number(),
  id_editora: Joi.number(),
})

module.exports = {
  object,
}
