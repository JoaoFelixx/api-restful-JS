const userRepository = require('../../../repository/UserRepository');
const phoneRepository = require('../../../repository/PhoneRepository');

async function deleteUser(_id) {
  try {

    if (await userRepository.deleteUser(_id))
      return await phoneRepository.deletePhoneNumber(_id)
    
    throw new Error()

  } catch (error) {
    throw new Error(error)
  }
}

module.exports = deleteUser