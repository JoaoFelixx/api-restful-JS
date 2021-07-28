const createPhone = require('./createPhone');
const validator   = require('../../../controllers/Validator')

async function createPhoneController(request, response) {
  if (!request.body._id || !request.body.phone_number) return response.status(400)

  const { _id, phone_number } = request.body;

  const [ errorId ]          = validator.isId(_id);
  const [ errorPhoneNumber ] = validator.isPhoneNumber(phone_number)

  if (errorId.length > 0 || errorPhoneNumber.length > 0) 
    return response.status(400).json({ result: [ errorId, errorPhoneNumber ] })

  return await createPhone(_id, phone_number)
    .then(() => response.status(202).json({ result: 'Phone added' }))
    .catch((err) => response.status(401).json({ result: 'this phone already exists' }))
}

  module.exports = createPhoneController;