const { UserService } = require('../services');
const { UserRepository } = require('../repository');

const userRepository = new UserRepository();
const userService = new UserService({ userRepository });

module.exports = userService;