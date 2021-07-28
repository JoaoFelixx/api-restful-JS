const phoneRepository = require('../../../repository/PhoneRepository');

async function deletePhone(phone_number) {
  try {

    return await phoneRepository.deletePhoneNumber(phone_number)

  } catch (error) {
    throw new Error(error)
  }
}

module.exports = deletePhone;