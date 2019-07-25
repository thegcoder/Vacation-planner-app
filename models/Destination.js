const mongoose = require('./connection.js')


// destination
const newDestinationModelSchema = new mongoose.Schema({
  name: String,
  description: String
})

const DestinationCollection = mongoose.model('User', newDestinationModelSchema)


function getDestination(destinationId) {
  return DestinationCollection.findByElementId(destinationId)
}

function createDestination(newDestination) {
  return DestinationCollection.create(newDestination)
}

function updateDestination(destinationId, updatedDestination) {
  return DestinationCollection.findByElementIdAndUpdate(destinationId,updatedDestination,{new: true})
}

function deleteDestination(destinationId) {
  return DestinationCollection.findByElementIdAndDelete(destinationId)
}
module.exports = {
  getDestination,
  createDestination,
  updateDestination,
  deleteDestination
}
