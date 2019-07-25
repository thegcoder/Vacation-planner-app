const mongoose = require('./connection.js')


// destination
const newDestinationModelSchema = new mongoose.Schema({
  name: String,
  description: String
})

const DestinationCollection = mongoose.model('User', newDestinationModelSchema)

function getAllDestinations() {
  return DestinationCollection.find({
  })
}
function getDestination(destinationId) {
  return DestinationCollection.findById(destinationId)
}

function createDestination(newDestination) {
  return DestinationCollection.create(newDestination)
}

function updateDestination(destinationId, updatedDestination) {
  return DestinationCollection.findByIdAndUpdate(destinationId,updatedDestination,{new: true})
}

function deleteDestination(destinationId) {
  return DestinationCollection.findByIdAndDelete(destinationId)
}
module.exports = {
  getDestination,
  createDestination,
  updateDestination,
  deleteDestination
}
