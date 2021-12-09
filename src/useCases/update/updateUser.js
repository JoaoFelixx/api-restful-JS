const { 
  userService, 
  phoneService,
} = require('../../factories');

async function updateUser(user, _id) {
  try {    
    return await Promise.all([
      await userService.update(_id, user),
      await phoneService.update(_id, user.phone_number)
    ])

  } catch (error) {
    throw new Error(error)
  }
}

module.exports = updateUser;