const mongoose = require('./connection.js')



const newUserModelSchema = new mongoose.Schema({
  name: String,
  description: String
})


const UserCollection = mongoose.model('User', UserModelSchema)



function getUser(userId) {
  return UserCollection.findByUserId(userId)
}

function createUser(newUser) {
  return UserCollection.create(newUser)
}

function updateUser(userId, updatedUser) {
  return UserCollection.findByIdAndUpdate(userId,updatedUser,{new: true})
}

function deleteUser(userId) {
  return UserCollection.findByIdAndDelete(userId)
}
module.exports = {
  getUser,
  createUser,
  updateUser,
  deleteUser
}
