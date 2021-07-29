const { removeByPhoneNumber } = require('../../../repository/PhoneRepository');

async function deletePhone(phone_number) {
  try {

    return await removeByPhoneNumber(phone_number)

  } catch (error) {
    throw new Error(error)
  }
}

module.exports = deletePhone;