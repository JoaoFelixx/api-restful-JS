const updateUser = require('./updateUser');
const { User } = require('../../entities')

async function updateUserController(request, response) {
  try {
    request.body._id = request.params._id;
    
    const user = new User(request.body);

    const { error, valid } = user.isValid();
    
    if (!valid) 
      return response.status(400).json({ error: error.join(', ')});
  
    await updateUser(request.body, request.params._id)

    return response.status(202).json({ result: 'Updated the user' });

  } catch (err) {
    console.log(err)
    response.status(400).json({ result: 'Email or number not exists' })
  }
}

module.exports = updateUserController;