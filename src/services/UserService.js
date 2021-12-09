class UserService {
  constructor ({ userRepository }) {
    this.userRepository = userRepository;
  }

  async add(user) {
    return await this.userRepository.add(user)
  }

  async get(_id) {
    return await this.userRepository.get();
  }
  
  async remove(_id) {
    return await this.userRepository.remove(_id)
  }

  async update(_id, user) {
    return await this.userRepository.edit(user)
  }
}

module.exports = UserService;