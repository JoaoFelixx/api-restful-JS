const { Router }               = require('express');

const getAllUsersController    = require('../useCases/get/allUsers/getAllUsersController');
const getUserByEmailController = require('../useCases/get/byEmail/getUserByEmailController')
const createUserController     = require('../useCases/create/createUserController');
const updateUserController     = require('../useCases/update/updateUserController')
const deleteUserController     = require('../useCases/delete/deleUserController');

const router = Router();

router.get('/api/v1/users', getAllUsersController);

router.get('/api/v1/users/filterbyemail/:email', getUserByEmailController);

router.post('/api/v1/users', createUserController);

router.put('/api/v1/users', updateUserController)

router.delete('/api/v1/users/:_id', deleteUserController);


module.exports = { router }