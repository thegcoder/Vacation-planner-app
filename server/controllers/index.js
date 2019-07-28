const { Destinations, Users } = require('../models');

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
            data = await Destinations.findByIdAndUpdate(id, object, {new: true});
            return data;
            break;
        case 'users':
            data = await Users.findByIdAndUpdate(id, object), {new: true};
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

module.exports = {
   all,
   create,
   read,
   update,
   deleter
}
