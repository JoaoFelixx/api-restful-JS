const { getByEmail } = require('../../../repository/UserRepository');

async function getUserByEmail(email) {
  try {

    return await getByEmail(email)

  } catch(error) {
    throw new Error(error)
  }
}

module.exports = getUserByEmail