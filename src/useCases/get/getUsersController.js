const getUsers = require('./getUsers');

async function getAllUsersController(request, response) {
  return await getUsers()
    .then(([rows]) => response.status(200).json(rows))
      .catch((err) => response.sendStatus(500))
}

module.exports = getAllUsersController;