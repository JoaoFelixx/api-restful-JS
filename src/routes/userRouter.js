const { Router }               = require('express');

const createUserController     = require('../useCases/create/users/createUserController');
const deleteUserController     = require('../useCases/delete/users/deleUserController');
const getAllUsersController    = require('../useCases/get/allUsers/getAllUsersController');
const getUserByEmailController = require('../useCases/get/byEmail/getUserByEmailController')


const router = Router();

router.get('/api/v1/users', getAllUsersController);

router.get('/api/v1/users/filterbyemail/:email', getUserByEmailController);

router.post('/api/v1/users', createUserController);

router.delete('/api/v1/users/:_id', deleteUserController);


module.exports = router