const deleteUser = require('./deleteUser');

async function deleteUserController(request, response) {
  if (!request.params._id) response.sendStatus(400)

  if (!validator.isId(request.params._id))
    return response.status(400).json({ result: 'Id is not valid' });

  return await deleteUser(request.params._id)
    .then(
      () => response.status(202).json({ result: 'Deleted User' }))
    .catch(
      (err) => response.status(400).json({ result: 'Error, user not deleted' }))
}

module.exports = deleteUserController;