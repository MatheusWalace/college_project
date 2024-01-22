const db = require("../config/db")

module.exports = {

  create: async (tableName, data) => {
    try {
      const { email } = data;
      const existingUser = await db(tableName).where('email', email).first();
      if (existingUser) {
        return "usuario ja cadastrado"
      }else {
        const result = await db(tableName).insert(data)
        return result
      }
    } catch (error) {
      return null
    }
  },

  update: async (tableName, id, data) => {
    try {
      const result = await db(tableName).where("id", id).update(data)
      return result
    } catch (error) {
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
