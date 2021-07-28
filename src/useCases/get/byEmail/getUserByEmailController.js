const getUserByEmail = require('./getUserByEmail');
const validator = require('../../../controllers/Validator')


async function getUserByEmailController(request, response) {
  
  if (!request.params.email) return response.status(400).json({ result: 'The server need a email'}) 

  const { email } = request.params;

  const [error] = validator.isEmail(email)

  if (error.length > 0) return response.status(400).json({ result: error });

  return await getUserByEmail(email)
    .then(([rows]) => response.status(200).json(rows))
    .catch((err) => console.log(err))

}

module.exports = getUserByEmailController;