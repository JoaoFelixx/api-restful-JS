const {
  userService,
  phoneService,
} = require('../../factories');

async function createUser(user) {
  try {
    return await Promise.all([
      phoneService.add(user._id, user.phone_number),
      userService.add(user)
    ])

  } catch (error) {
    throw new Error(error);
  }
}

module.exports = createUser;