const { 
  userService, 
  phoneService,
} = require('../../factories');

async function updateUser(user, _id) {
  try {
    const { first_name, last_name, email, phone_number} = user;
    
    return await Promise.all([
      await userService.edit(first_name, last_name, email, _id),
      await phoneService.edit(phone_number, _id)
    ])

  } catch (error) {
    throw new Error(error)
  }
}

module.exports = updateUser;