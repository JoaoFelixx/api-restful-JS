const { 
  userService,
  phoneService, 
} = require('../../factories');

async function deleteUser(_id) {
  try {
    return await Promise.all([
      userService.remove(_id),
      phoneService.remove(_id)
    ])
  
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = deleteUser