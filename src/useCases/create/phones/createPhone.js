const { add } = require('../../../repository/PhoneRepository')

async function createPhone(_id, phone_number) {
  try {

    return await add(_id, phone_number)

  } catch (error) {
    throw new Error(error)
  }

}

module.exports = createPhone;