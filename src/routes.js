const { Router } = require('express');
const {
  getUsersController,
  createUserController,
  deleteUserController,
  updateUserController,
} = require('./useCases');

const router = Router();

router.get('/api/v1/users/:user_id?', getUsersController); 

router.post('/api/v1/users', createUserController);

router.put('/api/v1/users/:_id', updateUserController)

router.delete('/api/v1/users/:_id', deleteUserController);

module.exports = router 