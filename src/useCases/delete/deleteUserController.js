const deleteUser = require('./deleteUser');

async function deleteUserController(request, response) {
  try {
    const { _id } = request.params;

    if (!_id) response.sendStatus(400)
  
    await deleteUser(_id)

    return response.status(202).json({ result: 'Deleted User' })
  } catch (err) {
    console.error(err)
    return response.sendStatus(409)
  }
}

module.exports = deleteUserController;