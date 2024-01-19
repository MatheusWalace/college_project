const dbo = require("../dbo/book")
const validation = require("../model/book")
const tablename = "book"

const get = async () => {
  return await dbo.getAll(tablename)
}

const getById = async (id) => {
  if (!id) {
    return false
  }
  return await dbo.getById(id, tablename)
}

const search = async (body) => {
  if (!body) {
    return false
  }
  return await dbo.search(body)
}

const insert = async (object) => {
  try {
    await validation.object.validateAsync(object, {
      abortEarly: false,
    })
  } catch (error) {
    const errors = error.details.map((el) => el.message)
    return { errors }
  }
  return await dbo.create(tablename, object)
}

const update = async (object, id) => {
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
  return await dbo.update(object, id)
}

const remove = async (id) => {
  if (!id) {
    return false
  }
  return await dbo.remove(id)
}

module.exports = {
  get,
  getById,
  search,
  insert,
  update,
  remove,
}
