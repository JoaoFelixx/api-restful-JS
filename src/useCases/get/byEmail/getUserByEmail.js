const userRepository = require('../../../repository/UserRepository');

async function getUserByEmail(email) {
  try {

    return await userRepository.selectByEmail(email)

  } catch(error) {
    throw new Error(error)
  }
}

module.exports = getUserByEmail