const { v4 }      = require('uuid');
const validator   = require('../../controllers/Validator')
const createUser  = require('./createUser');

async function createUserController(request, response) {
  if (!request.body.first_name || !request.body.last_name || !request.body.email || !request.body.phone_number)
    return response.sendStatus(400);

  const { first_name, last_name, email, phone_number } = request.body;
  const _id = v4()

  const [ errorName ]        = validator.isName(first_name, last_name)
  const [ errorEmail ]       = validator.isEmail(email)
  const [ errorPhoneNumber ] = validator.isPhoneNumber(phone_number)

  if (errorName.length > 0 || errorEmail.length > 0 || errorPhoneNumber.length > 0)
    return response.status(400).json({ result: [ errorName, errorEmail, errorPhoneNumber ] })
 

  return await createUser(_id, request.body)
    .then(
      () => response.sendStatus(201))
    .catch(
      (err) => response.status(400).json({ result: 'Email or number already exists' }))
}

module.exports = createUserController;