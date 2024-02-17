const User = require("../models/user");

async function handleGetAllUsers(req, res) {
    const allDBusers = await User.find({})
    return res.json(allDBusers);
};

async function handleGetUserbyId(req, res) {
    const user = await User.findById(req.params.id)
    if (user) {
        return res.json(user);
    } else {
        return res.status(404).json({ error: 'User not found' });
    }
};

async function handleCreateNewUser(req, res){
    const body = req.body;
    if(!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title){
        return res.status(400).json({ msg: "All Fields are required"});
    }

    const result = await User.create({
        first_name: body.first_name,
        last_name: body.last_name,
        email: body.email,
        gender: body.gender,
        job_title: body.job_title,
    })
    return res.status(201).json({ msg : "Success" , id : result._id });
}

async function handleUpdateUserbyId(req, res) {
    await User.findByIdAndUpdate(req.params.id, { last_name: "Changed" })
        .then(() => {
            return res.json({ status: "Success" });
        })
        .catch(err => {
            console.error(err);
            return res.status(500).json({ error: 'Internal Server Error' });
        })
}

async function handleDeleteUserbyId(req, res){
    const id = req.params.id;
    await User.findByIdAndDelete(id)
        .then(() => {
            return res.json({ status: 'Success', message: 'User deleted successfully' });
        })
        .catch(err => {
            console.error(err);
            return res.status(500).json({ error: 'Internal Server Error' });
        });
}

module.exports = {
    handleGetAllUsers,
    handleGetUserbyId,
    handleUpdateUserbyId,
    handleDeleteUserbyId,
    handleCreateNewUser,
};