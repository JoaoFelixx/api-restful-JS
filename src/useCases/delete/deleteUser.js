const userRepository  = require('../../repository/UserRepository');
const phoneRepository = require('../../repository/PhoneRepository');

async function deleteUser (_id) {
  try {

    return await userRepository.deleteUser(_id)
      .then(
        async () => phoneRepository.deletePhoneNumber(_id))

  } catch (error) {
    throw new Error(error)
  }
}

module.exports = deleteUser