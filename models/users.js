var mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

//Users schema
var usersSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: [true, "First name field is required."]
    },
    last_name: {
        type: String,
        required: [true, "Last name field is required."]
    },
    gender: String,
    address: {
        street: {
            type: String
        },
        city: {
            type: String
        },
        state: {
            type: String
        }
    },
    age: Number,
    balance: Number,
    
    username: String,
    password: {
        type: String,
        select: false
    }
});

usersSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('Users', usersSchema);

/*var commands = {
    getUsers: function(callback) {
        return Users.find(callback);
    },
    getUserById: function(id, callback) {
        return Users.findById(id, callback);
    },
    addUser: function(userObj, callback) {
        return Users.create(userObj, callback);
    },
    updateUser:function(id, userObj, callback) {
        var query = {_id: userObj.id};
        var update = { $set:{
    
        }
    
        };
        Users.set(query, update, userObj, callback);
    }
};*/