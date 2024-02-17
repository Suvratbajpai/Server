const express = require("express");
const {
    handleGetAllUsers,
    handleGetUserbyId,
    handleUpdateUserbyId,
    handleDeleteUserbyId,
    handleCreateNewUser,
} = require("../controlleres/user");

const router = express.Router();


// REST API
router.route('/')
    .get(handleGetAllUsers)
    .post(handleCreateNewUser)

router.route('/:id')
    .get(handleGetUserbyId)
    .patch(handleUpdateUserbyId)
    .put(handleUpdateUserbyId)
    .delete(handleDeleteUserbyId)

router.post('/', handleCreateNewUser)
//To Create a new user

module.exports = router