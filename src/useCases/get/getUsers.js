const { userService } = require('../../factories');

async function getAllUsers(_id) {
  try {
    if (!_id)
      return await userService.get()

    return await userService.getById(_id);
    
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = getAllUsers;