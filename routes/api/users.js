const express = require('express');
const router = express.Router();

const Users = require('../../models/users');

//Retrives all the info about the users in the database.
router.get('/all', (request, response, next) => {
    //console.log(`Request made at IP ${request.socket.remoteAddress}:${request.socket.remotePort}`);

    Users.find()
    .then(data => { response.json(data) })
    .catch(next);
})

//Retrieves a specific user based on the ID.
router.get('/:_id', (request, response, next) => {
    //console.log(`Request made at IP ${request.socket.remoteAddress}:${request.socket.remotePort}`);

    Users.findById({_id: request.params._id})
    .then(data => { response.json(data) })
    .catch(next);
})

//Adds a new user into the database.
router.post('/adduser', (request, response, next) => {
    var content = request.body;
    Users.create(content)
    .then(data => { response.json(data) })
    .catch(next);
})

router.put('/updateuser', (request, response, next) => {
    Users.update()
    .then(data => { response.json(data) })
    .catch(next);
})

module.exports = router;