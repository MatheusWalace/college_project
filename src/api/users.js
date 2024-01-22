const facade = require("../facade/users")

const insert = async (req, res) => {
  const object = req.body
  const result = await facade.insert(object)
  if (!result) {
    return res.status(400)
  }
  return res.sendStatus(204)
}

const update = async (req, res) => {
  const id = req.params.id
  const object = req.body
  const result = await facade.update(id, object)
  if (!result) {
    return res.status(400)
  }
  return res.sendStatus(204)
}

const remove = async (req, res) => {
  const id = req.params.id
  await facade.remove(id)
  return res.sendStatus(204)
}

module.exports = {
  insert,
  update,
  remove,
}
