const mongoose = require('./connection.js');

// Destinations schema
const DestinationSchema = new mongoose.Schema({
    country: {
        type: String,
        required: true
    },
    city: {
        type: String
    },
    state: {
        type: String
    },
    description: String,
    type: {
        type: String,
        default: 'destination'
    }
});

// User schema
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    email: String,
    requirements: [],
    type: {
        type: String,
        default: 'user'
    }
});

// Destinations collection
const Destinations = mongoose.model('Destinations', DestinationSchema);

// Users collection
const Users = mongoose.model('Users', UserSchema);

module.exports = {
  Destinations,
  Users
}
