const phoneRepository = require('../../../repository/PhoneRepository')

async function createPhone(_id, phone_number) {
  try {

    return await phoneRepository.createPhoneNumber(_id, phone_number)

  } catch (error) {
    throw new Error(error)
  }

}

module.exports = createPhone;