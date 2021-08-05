const User  = require('../../repository/UserRepository');
const Phone = require('../../repository/PhoneRepository');

async function updateUser(user, _id) {
  try {
    const { first_name, last_name, email, phone_number} = user;
    
    await User.edit(first_name, last_name, email, _id);
    
    await Phone.edit(phone_number, _id);


  } catch (error) {
    throw new Error(error)
  }
}

module.exports = updateUser;