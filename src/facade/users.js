const dbo = require("../dbo/users")
const validation = require("../model/users")
const bcrypt = require("bcrypt");
const tablename = "users"

const insert = async (object) => {
  try {
    await validation.object.validateAsync(object, {
      abortEarly: false,
    })
  } catch (error) {
    const errors = error.details.map((el) => el.message)
    return { errors }
  }
  const {password} = object

  const hashedPassword = await bcrypt.hash(password, 10);
  const data = {
    ...object,
    password: hashedPassword
  }
  return await dbo.create(tablename, data)
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

  const {password} = object

  const hashedPassword = await bcrypt.hash(password, 10);
  const data = {
    ...object,
    password: hashedPassword
  }
  return await dbo.update(tablename, id, data)
}

const remove = async (id) => {
  if (!id) {
    return false
  }
  return await dbo.delete(tablename, id)
}

module.exports = {
  insert,
  update,
  remove,
}
