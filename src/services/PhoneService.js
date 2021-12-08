class PhoneService {
  constructor ({ phoneRepository }) {
    this.phoneRepository = phoneRepository;
  }

  async add(_id, phone_number) {
    return await this.phoneRepository.add(_id, phone_number);
  }
 
  async remove(_id) {
    return await this.phoneRepository.remove(_id);
  }
  
  async update(_id, phone_number) {
    return await this.phoneRepository.edit(_id, phone_number);
  }
}

module.exports = PhoneService;