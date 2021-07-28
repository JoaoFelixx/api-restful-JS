const getAllUsers = require('./getAllUsers');

async function getAllUsersController(request, response) {
  return await getAllUsers()
    .then(([rows]) => response.status(200).json(rows))
      .catch((err) =>{ 
          console.log(err)
        response.sendStatus(500)}) 
}

module.exports = getAllUsersController;