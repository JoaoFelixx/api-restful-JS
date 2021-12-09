class UserService {
  constructor ({ userRepository }) {
    this.userRepository = userRepository;
  }

  async add(user) {
    return await this.userRepository.add(user)
  }

  async get() {
    return await this.userRepository.get();
  }
  
  async getById(_id) {
    return await this.userRepository.getById(_id)
  }

  async remove(_id) {
    return await this.userRepository.remove(_id)
  }

  async update(_id, user) {
    return await this.userRepository.edit(user)
  }
}

module.exports = UserService;