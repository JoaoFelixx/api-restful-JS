const userRepository = require('../../../repository/UserRepository');
const phoneRepository = require('../../../repository/PhoneRepository');

async function createUser(_id, user) {
  try {

    if (await phoneRepository.createPhoneNumber(_id, user.phone_number))
      return await userRepository.createUser(_id, user)
    
    throw new Error()

  } catch (error) {
    throw new Error(error)
  }

}

module.exports = createUser;