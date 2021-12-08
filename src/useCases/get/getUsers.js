const { get } = require('../../repository/UserRepository')

async function getAllUsers() {
  try {
    return await get()

  } catch (error) {
    throw new Error(error)
  }
}

module.exports = getAllUsers;