const deletePhone = require('./deletePhone');
const validator   = require('../../../controllers/Validator');

async function deletePhoneController(request, response) {
  if (!request.params.phone_number) return response.sendStatus(400)

  const { phone_number } = request.params;

  const [error] = validator.isPhoneNumber(phone_number);

  if (error.length > 0) return response.status(400).json({ result: error });

  return await deletePhone(phone_number)
    .then(() => response.status(202).json({ result: 'deleted Phone number' }))
    .catch((err) => response.status(409).json({ result: 'Phone number not exists' }))
}

module.exports = deletePhoneController;