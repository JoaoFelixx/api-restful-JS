const getUsersController   = require('./get');
const updateUserController = require('./update');
const createUserController = require('./create');
const deleteUserController = require('./delete');

const useCases = {
  getUsersController,
  updateUserController,
  createUserController,
  deleteUserController,
}

module.exports = useCases;