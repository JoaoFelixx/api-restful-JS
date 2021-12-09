const updateUser = require('./updateUser');

async function updateUserController(request, response) {
  if (!request.body.first_name || !request.body.last_name || !request.body.email || !request.body.phone_number || !request.params._id)
    return response.status(400).json({ result: 'Bad request' })

  if (errorName.length > 0 || errorEmail.length > 0 || errorPhoneNumbers.length > 0)
    return response.status(400).json({ result: [errorName, errorEmail, errorPhoneNumbers] })


  return await updateUser(request.body, request.params._id)
    .then(
      () => response.status(202).json({ result: 'User updated' }))
    .catch(
      (err) => response.status(400).json({ result: 'Email or number not exists' }))
}

module.exports = updateUserController;