const { PhoneService } = require('../services');
const { PhoneRepository } = require('../repository');

const phoneRepository = new PhoneRepository();
const phoneService = new PhoneService({ phoneRepository });

module.exports = phoneService;