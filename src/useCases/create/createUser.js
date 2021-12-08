const User  = require('../../repository/UserRepository');
const Phone = require('../../repository/PhoneRepository');

async function createUser(_id, user) {
  try {
    return await Promise.all([
      await Phone.add(_id, user.phone_number),
      await User.add(_id, user)
    ])
  
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = createUser;