const userRepository = require('../../repository/UserRepository');

async function getAllUsers() {
  try {
    return await userRepository.selectAll()

    
  } catch (error) {
    throw new Error(error)
  }

}

module.exports = getAllUsers;