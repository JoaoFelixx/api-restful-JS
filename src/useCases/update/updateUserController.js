const updateUser = require('./updateUser');
const validator  = require('../../controllers/Validator');

async function updateUserController(request, response) {
  if (!request.body.first_name || !request.body.last_name || !request.body.email || !request.body.new_phone_number || !request.body.old_phone_number)
    return response.status(400).json({ result: 'Bad request' })

  const { first_name, last_name, email, new_phone_number, old_phone_number } = request.body;
  
  const [errorName] = validator.isName(first_name, last_name)
  const [errorEmail] = validator.isEmail(email)
  const [errorPhoneNumbers] = validator.isPhoneNumbers(new_phone_number, old_phone_number)

  if (errorName.length > 0 || errorEmail.length > 0 || errorPhoneNumbers.length > 0)
    return response.status(400).json({ result: [errorName, errorEmail, errorPhoneNumbers] })


  return await updateUser(request.body)
    .then(
      () => response.status(202).json({ result: 'User updated' }))
    .catch(
      (err) => response.status(400).json({ result: 'Email or number not exists' }))
}

module.exports = updateUserController;