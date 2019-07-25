const mongoose = require('./connection.js');

/**
 * 1. Schemas
 */

// Student schema
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

// State schema
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


/**
 * 2. Collections
 */

// Destinations collection
const Destinations = mongoose.model('Destinations', DestinationSchema);

// Users collection
const Users = mongoose.model('Users', UserSchema);

/**
 * 3. CRUD
 */

// Get All
async function all(type) {
    let data = Promise.resolve(false);
    switch (type) {
        case 'destinations':
            data = await Destinations.find({});
            return data;
            break;
        case 'users':
            data = await Users.find({});
            return data;
            break;
        default:
            return data;
    }
}

// Create Operations
async function create(type, object) {
    let data = Promise.resolve(false);
    switch (type) {
        case 'destinations':
            data = await Destinations.create(object);
            return data;
            break;
        case 'users':
            data = await Users.create(object);
            return data;
            break;
        default:
            return data;
    }
}

// Read Operations
async function read(type, id) {
    let data = Promise.resolve(false);
    switch (type) {
        case 'destinations':
            data = await Destinations.findById(id);
            return data;
            break;
        case 'users':
            data = await Users.findById(id);
            return data;
            break;
        default:
            return data;
    }
}

// Update Operations
async function update(type, id, object) {
    let data = Promise.resolve(false);
    switch (type) {
        case 'destinations':
            data = await Destinations.findByIdAndUpdate(id, object);
            return data;
            break;
        case 'users':
            data = await Users.findByIdAndUpdate(id, object);
            return data;
            break;
        default:
            return data;
    }
}

// Delete Operations
async function deleter(type, id) {
    let data = Promise.resolve(false);
    switch (type) {
        case 'destinations':
            data = await Destinations.findByIdAndDelete(id);
            return data;
        case 'users':
            data = await Users.findByIdAndDelete(id);
            return data;
        default:
            return data;
    }
}

/**
 * 4. Export all the functions
 */
 module.exports = {
   all,
   create,
   read,
   update,
   deleter
 }
