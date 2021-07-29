const User  = require('../../repository/UserRepository');
const Phone = require('../../repository/PhoneRepository');

async function updateUser(user) {
  try {
    const { first_name, last_name, email, new_phone_number, old_phone_number } = user;
    
    await User.edit(first_name, last_name, email);
    
    await Phone.edit(new_phone_number, old_phone_number);


  } catch (error) {
    throw new Error(error)
  }
}

module.exports = updateUser;