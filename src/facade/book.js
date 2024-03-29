const dbo = require("../dbo/book")
const validation = require("../model/book")
const tablename = "inbook"

const get = async () => {
  return await dbo.getAll(tablename)
}

const getById = async (id) => {
  if (!id) {
    return false
  }
  return await dbo.getById(tablename, id)
}

const insert = async (object) => {
  try {
    await validation.object.validateAsync(object, {
      abortEarly: false,
    })
  } catch (error) {
    console.log(error);
    const errors = error.details.map((el) => el.message)
    return { errors }
  }
  return await dbo.create(tablename, object)
}

const update = async (id, object) => {
  if (!id) {
    return false
  }
  try {
    await validation.object.validateAsync(object, {
      abortEarly: false,
    })
  } catch (error) {
    const errors = error.details.map((el) => el.message)
    return { errors }
  }
  return await dbo.update(tablename, id, object)
}

const remove = async (id) => {
  if (!id) {
    return false
  }
  return await dbo.delete(tablename, id)
}

module.exports = {
  get,
  getById,
  insert,
  update,
  remove,
}
