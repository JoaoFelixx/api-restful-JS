const userRepository = require('../../../repository/UserRepository');
const phoneRepository = require('../../../repository/PhoneRepository');

async function deleteUser(_id) {
  try {

    await userRepository.remove(_id)
    await phoneRepository.removeById(_id)
    
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = deleteUser