const { Router }           = require('express');
const createUserController = require('../useCases/create/createUserController');
const deleteUserController = require('../useCases/delete/deleUserController');
const getUserController    = require('../useCases/get/getUserController');

const router = Router();

router.get('/api/v1/users', getUserController);

router.post('/api/v1/users', createUserController);

router.delete('/api/v1/users/:_id', deleteUserController);

module.exports = { router };