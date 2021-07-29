const User  = require('../../repository/UserRepository');
const Phone = require('../../repository/PhoneRepository');

async function deleteUser(_id) {
  try {

    await User.remove(_id)
    await Phone.removeById(_id)
    
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = deleteUser