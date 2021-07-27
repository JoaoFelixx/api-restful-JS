const userRepository  = require('../../repository/UserRepository');
const phoneRepository = require('../../repository/PhoneRepository')

async function createUser(_id,user) {

  try {
    
    return await phoneRepository.createPhoneNumber(_id, user.phone_numbers)
      .then(async () => { 
        await userRepository.createUser(_id, user)})

  } catch (error) {
      throw new Error(error)
  }
}

module.exports = createUser;