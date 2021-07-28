const { Router }               = require('express');

const createPhoneController    = require('../useCases/create/phones/createPhoneController')
const deletePhoneController    = require('../useCases/delete/phones/deletePhoneController')

const router = Router()

router.post('/api/v1/phones',createPhoneController);

router.delete('/api/v1/phones/:phone_number', deletePhoneController);


module.exports = router