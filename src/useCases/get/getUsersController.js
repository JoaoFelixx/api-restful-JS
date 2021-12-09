const getUsers = require('./getUsers');

async function getAllUsersController(request, response) {
  try {
    const [rows] = await getUsers(request.params.user_id)

    if (rows.length === 0) return response.sendStatus(204);

    return response.status(200).json([{ result: rows }]);

  } catch (err) {
    response.sendStatus(409);
  }
}

module.exports = getAllUsersController;