const { date } = require("joi")
const db = require("../config/db")

module.exports = {
  getAll: async (tableName) => {
    try {
      const result = await db(tableName).select()
      return result
    } catch (error) {
      console.log(error)
      return []
    }
  },

  getById: async (tableName, id) => {
    try {
      const result = await db(tableName).where("id", id).first()
      return result
    } catch (error) {
      console.log(error)
      return null
    }
  },

  create: async (tableName, data) => {
    try {
      const result = await db(tableName).insert(data)
      return result
    } catch (error) {
      console.log(error)
      return null
    }
  },

  update: async (tableName, id, data) => {
    try {
      const result = await db(tableName).where("id", id).update(data)
      return result
    } catch (error) {
      console.log(error)
      return null
    }
  },

  delete: async (tableName, id) => {
    try {
      const result = await db(tableName).where("id", id).del()
      return result
    } catch (error) {
      console.log(error)
      return null
    }
  },
}
