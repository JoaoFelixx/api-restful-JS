const { 
  userService,
  phoneService, 
} = require('../../factories');

async function deleteUser(_id) {
  try {
    return await Promise.all([
      await userService.remove(_id),
      await phoneService.removeById(_id)
    ])
  
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = deleteUser