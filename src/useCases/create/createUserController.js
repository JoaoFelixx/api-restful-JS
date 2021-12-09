const createUser  = require('./createUser');
const { User } = require('../../entities')

async function createUserController(request, response) {
  try {
    const user = new User(request.body);

    const { error, valid } = user.isValid();
  
    if (!valid) 
      return response
        .status(400)
        .json({ error: error.join(', ')});
  
    await createUser(user);
    
    return response.status(201).json({ user_id: user._id});

  } catch (err) {
    response.status(409).json({ result: 'Email or number already exists' });
  }
}

module.exports = createUserController;