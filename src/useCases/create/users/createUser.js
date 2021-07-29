const userRepository = require('../../../repository/UserRepository');
const phoneRepository = require('../../../repository/PhoneRepository');

async function createUser(_id, user) {
  try {

    if (await phoneRepository.add(_id, user.phone_number))
      return await userRepository.add(_id, user)
    
    throw new Error();

  } catch (error) {
    throw new Error(error);
  }

}

module.exports = createUser;