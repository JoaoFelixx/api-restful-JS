const { userService } = require('../../factories');

async function getAllUsers() {
  try {
    return await userService.get()

  } catch (error) {
    throw new Error(error)
  }
}

module.exports = getAllUsers;