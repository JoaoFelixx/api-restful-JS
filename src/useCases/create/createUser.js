const { 
  userService,
  phoneService, 
} = require('../../factories');

async function createUser(_id, user) {
  try {
    return await Promise.all([
      await phoneService.add(_id, user.phone_number),
      await userService.add(_id, user)
    ])
  
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = createUser;